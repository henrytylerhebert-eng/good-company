import { useEffect, useMemo, useState } from 'react'
import { colleagues } from './data'
import { canApprove, createRoom, getRecommendation, loadRoom, persistRoom } from './room-state'
import type { Colleague, Confidence, DecisionState, EvidenceType, Phase, Room, View } from './types'

const phases: { id: Phase; number: string; label: string; owner: string }[] = [
  { id: 'frame', number: '01', label: 'Frame', owner: 'Mira' },
  { id: 'evidence', number: '02', label: 'Evidence', owner: 'Echo' },
  { id: 'decide', number: '03', label: 'Decide', owner: 'Rook + You' },
  { id: 'learn', number: '04', label: 'Learn', owner: 'Echo' },
]

const decisions: { id: DecisionState; label: string; note: string }[] = [
  { id: 'build', label: 'Build', note: 'Proceed inside the approved contract.' },
  { id: 'research', label: 'Research', note: 'Resolve important uncertainty first.' },
  { id: 'hold', label: 'Hold', note: 'Valid work, wrong time or dependency.' },
  { id: 'reframe', label: 'Reframe', note: 'The problem definition needs revision.' },
  { id: 'reject', label: 'Reject', note: 'Current evidence does not support continuing.' },
]

function CompassMark() {
  return (
    <svg className="compass-mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M20 3l3.2 13.8L37 20l-13.8 3.2L20 37l-3.2-13.8L3 20l13.8-3.2L20 3z" fill="currentColor" />
      <circle cx="20" cy="20" r="4" fill="#0b1720" />
    </svg>
  )
}

function Avatar({ colleague, active = false, onClick }: { colleague: Colleague; active?: boolean; onClick: () => void }) {
  return (
    <button
      className={`avatar ${active ? 'active' : ''}`}
      style={{ '--colleague-accent': colleague.accent, '--portrait': `url(${colleague.image})` } as React.CSSProperties}
      onClick={onClick}
      aria-label={`Open ${colleague.name}'s profile`}
    >
      <span className="avatar-image" />
      <span>{colleague.name}</span>
    </button>
  )
}

function App() {
  const [room, setRoom] = useState<Room>(() => loadRoom())
  const [view, setView] = useState<View>('room')
  const [activeColleague, setActiveColleague] = useState<Colleague>(colleagues[0])
  const [cardOpen, setCardOpen] = useState(false)
  const [newRoomOpen, setNewRoomOpen] = useState(false)
  const [newRoomTitle, setNewRoomTitle] = useState('')

  useEffect(() => persistRoom(room), [room])

  const phaseIndex = phases.findIndex((phase) => phase.id === room.phase)
  const assumptions = room.evidence.filter((item) => item.type === 'assumption')
  const supportedEvidence = room.evidence.filter((item) => item.type !== 'assumption')

  const updateRoom = (patch: Partial<Room>) => {
    setRoom((current) => ({ ...current, ...patch, updatedAt: new Date().toISOString() }))
  }

  const goToPhase = (phase: Phase) => {
    const owner = colleagues.find((colleague) => colleague.phase === phase)
    updateRoom({ phase })
    if (owner) setActiveColleague(owner)
  }

  const createNewRoom = () => {
    const title = newRoomTitle.trim() || 'Untitled Room'
    setRoom(createRoom(title))
    setNewRoomTitle('')
    setNewRoomOpen(false)
    setView('room')
    setActiveColleague(colleagues[0])
  }

  const prepareDecision = () => {
    const recommendation = getRecommendation(room)
    updateRoom({ recommendation, phase: 'decide' })
    setActiveColleague(colleagues[2])
  }

  const approveDecision = () => {
    if (!canApprove(room) || !room.decision) return
    const now = new Date().toISOString()
    setRoom((current) => ({
      ...current,
      approved: true,
      phase: 'learn',
      updatedAt: now,
      history: [
        ...current.history,
        {
          id: `decision-${Date.now()}`,
          type: 'decision',
          title: `${current.decision?.toUpperCase()} approved by Human Owner`,
          detail: current.approvalNote,
          createdAt: now,
        },
      ],
    }))
    setActiveColleague(room.decision === 'build' ? colleagues[4] : colleagues[1])
  }

  const recordLearning = () => {
    if (!room.outcome.trim() || !room.learning.trim()) return
    const now = new Date().toISOString()
    setRoom((current) => ({
      ...current,
      updatedAt: now,
      history: [
        ...current.history,
        {
          id: `learning-${Date.now()}`,
          type: 'learning',
          title: 'Company Knowledge updated',
          detail: current.learning,
          createdAt: now,
        },
      ],
    }))
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => setView('room')} aria-label="Open the Room">
          <CompassMark />
          <span><strong>Good Company</strong><small>Better decisions take good company.</small></span>
        </button>

        <nav className="primary-nav" aria-label="Primary navigation">
          {([
            ['room', 'R', 'The Room'],
            ['company', 'C', 'Your Company'],
            ['knowledge', 'K', 'Knowledge'],
            ['history', 'H', 'History'],
          ] as [View, string, string][]).map(([id, icon, label]) => (
            <button key={id} className={view === id ? 'active' : ''} onClick={() => setView(id)} aria-label={label} title={label}>
              <span className="nav-icon">{icon}</span><span className="nav-label">{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="human-authority">
            <span className="human-dot">Y</span>
            <span><strong>You</strong><small>Human Owner</small></span>
          </div>
          <button className="new-room-button" onClick={() => setNewRoomOpen(true)}>+ New Room</button>
        </div>
      </aside>

      <main className="main-canvas">
        {view === 'room' && (
          <RoomView
            room={room}
            phaseIndex={phaseIndex}
            activeColleague={activeColleague}
            supportedEvidence={supportedEvidence.length}
            assumptions={assumptions.length}
            onUpdate={updateRoom}
            onPhase={goToPhase}
            onPrepareDecision={prepareDecision}
            onApprove={approveDecision}
            onRecordLearning={recordLearning}
            onColleague={(colleague) => { setActiveColleague(colleague); setCardOpen(true) }}
          />
        )}
        {view === 'company' && <CompanyView onColleague={(colleague) => { setActiveColleague(colleague); setCardOpen(true) }} />}
        {view === 'knowledge' && <KnowledgeView room={room} />}
        {view === 'history' && <HistoryView room={room} />}
      </main>

      {cardOpen && <ColleagueModal colleague={activeColleague} onClose={() => setCardOpen(false)} />}

      {newRoomOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setNewRoomOpen(false)}>
          <section className="new-room-modal" role="dialog" aria-modal="true" aria-labelledby="new-room-title" onMouseDown={(event) => event.stopPropagation()}>
            <p className="eyebrow">NEW ROOM</p>
            <h2 id="new-room-title">What are we working on?</h2>
            <p>Start with the work, problem, or opportunity. Mira will help you frame it.</p>
            <label>
              Room name
              <input autoFocus value={newRoomTitle} onChange={(event) => setNewRoomTitle(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && createNewRoom()} placeholder="e.g. Founder onboarding" />
            </label>
            <div className="modal-actions">
              <button className="text-button" onClick={() => setNewRoomOpen(false)}>Cancel</button>
              <button className="primary-button" onClick={createNewRoom}>Open the Room</button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

interface RoomViewProps {
  room: Room
  phaseIndex: number
  activeColleague: Colleague
  supportedEvidence: number
  assumptions: number
  onUpdate: (patch: Partial<Room>) => void
  onPhase: (phase: Phase) => void
  onPrepareDecision: () => void
  onApprove: () => void
  onRecordLearning: () => void
  onColleague: (colleague: Colleague) => void
}

function RoomView(props: RoomViewProps) {
  const { room, phaseIndex, activeColleague, supportedEvidence, assumptions, onUpdate, onPhase, onPrepareDecision, onApprove, onRecordLearning, onColleague } = props
  return (
    <div className="room-view">
      <header className="room-header">
        <div>
          <p className="eyebrow">THE ROOM <span>V0.1 · LOCAL</span></p>
          <h1>{room.title}</h1>
          <p className="room-summary">Bring the right thinking into the room.</p>
        </div>
        <div className="room-state">
          <span className={`status-indicator ${room.approved ? 'approved' : ''}`} />
          <div><small>Current state</small><strong>{room.approved ? `${room.decision} approved` : phases[phaseIndex]?.label || 'Frame'}</strong></div>
        </div>
      </header>

      <div className="phase-rail">
        {phases.map((phase, index) => (
          <button key={phase.id} className={`${room.phase === phase.id ? 'active' : ''} ${index < phaseIndex ? 'complete' : ''}`} onClick={() => onPhase(phase.id)}>
            <span>{index < phaseIndex ? '✓' : phase.number}</span>
            <div><strong>{phase.label}</strong><small>{phase.owner}</small></div>
          </button>
        ))}
      </div>

      <div className="room-layout">
        <section className="work-surface">
          {room.phase === 'frame' && <FramePhase room={room} onUpdate={onUpdate} onNext={() => onPhase('evidence')} />}
          {room.phase === 'evidence' && <EvidencePhase room={room} onUpdate={onUpdate} onNext={onPrepareDecision} />}
          {room.phase === 'decide' && <DecisionPhase room={room} supportedEvidence={supportedEvidence} assumptions={assumptions} onUpdate={onUpdate} onApprove={onApprove} />}
          {room.phase === 'learn' && <LearningPhase room={room} onUpdate={onUpdate} onRecord={onRecordLearning} />}
        </section>

        <aside className="context-rail">
          <div className="context-label"><span>IN THE ROOM</span><small>6 colleagues</small></div>
          <div className="avatar-row">
            {colleagues.map((colleague) => <Avatar key={colleague.id} colleague={colleague} active={colleague.id === activeColleague.id} onClick={() => onColleague(colleague)} />)}
          </div>

          <div className="active-contribution" style={{ '--colleague-accent': activeColleague.accent } as React.CSSProperties}>
            <div className="active-portrait" style={{ '--portrait': `url(${activeColleague.image})` } as React.CSSProperties} />
            <div>
              <p><strong>{activeColleague.name}</strong><span>{activeColleague.role}</span></p>
              <blockquote>“{activeColleague.question}”</blockquote>
              <p className="contribution-copy">{activeColleague.contribution}</p>
              <button className="text-link" onClick={() => onColleague(activeColleague)}>View colleague card →</button>
            </div>
          </div>

          <div className="authority-note">
            <p className="eyebrow">AUTHORITY</p>
            <strong>This decision is yours.</strong>
            <p>Colleagues may research, recommend, challenge, and build. Only you approve consequential direction.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function FramePhase({ room, onUpdate, onNext }: { room: Room; onUpdate: (patch: Partial<Room>) => void; onNext: () => void }) {
  const ready = Boolean(room.intent && room.human && room.desiredProgress && room.success)
  return (
    <div className="phase-content">
      <div className="phase-heading">
        <p className="eyebrow">MIRA · PRODUCT BRIEF</p>
        <h2>What are we actually trying to change?</h2>
        <p>Define the human problem before anyone begins designing the solution.</p>
      </div>

      <div className="form-stack">
        <label className="prominent-field">
          Intent
          <textarea value={room.intent} onChange={(event) => onUpdate({ intent: event.target.value })} placeholder="What are we trying to change?" />
        </label>
        <div className="form-pair">
          <label>
            Human
            <textarea value={room.human} onChange={(event) => onUpdate({ human: event.target.value })} placeholder="Who is affected or making the decision?" />
          </label>
          <label>
            Desired progress
            <textarea value={room.desiredProgress} onChange={(event) => onUpdate({ desiredProgress: event.target.value })} placeholder="What becomes possible or different?" />
          </label>
        </div>
        <label>
          Observable success
          <textarea value={room.success} onChange={(event) => onUpdate({ success: event.target.value })} placeholder="What would show that this worked?" />
        </label>
      </div>

      <div className="phase-action">
        <p><strong>{ready ? 'The brief is ready for evidence.' : 'Mira still needs the complete human problem.'}</strong><span>{ready ? 'Echo can now test what supports it.' : 'Complete all four fields before moving on.'}</span></p>
        <button className="primary-button" disabled={!ready} onClick={onNext}>Bring Echo in <span>→</span></button>
      </div>
    </div>
  )
}

function EvidencePhase({ room, onUpdate, onNext }: { room: Room; onUpdate: (patch: Partial<Room>) => void; onNext: () => void }) {
  const [statement, setStatement] = useState('')
  const [source, setSource] = useState('')
  const [type, setType] = useState<EvidenceType>('source')
  const [confidence, setConfidence] = useState<Confidence>('medium')

  const addEvidence = () => {
    if (!statement.trim() || !source.trim()) return
    onUpdate({
      evidence: [
        ...room.evidence,
        { id: `evidence-${Date.now()}`, statement: statement.trim(), source: source.trim(), type, confidence, createdAt: new Date().toISOString() },
      ],
    })
    setStatement('')
    setSource('')
  }

  return (
    <div className="phase-content">
      <div className="phase-heading">
        <p className="eyebrow">ECHO · EVIDENCE PACKAGE</p>
        <h2>What supports our current understanding?</h2>
        <p>Sources, observations, and assumptions remain visibly different.</p>
      </div>

      <div className="evidence-list">
        {room.evidence.map((item) => (
          <article key={item.id} className="evidence-row">
            <span className={`evidence-type ${item.type}`}>{item.type}</span>
            <div><p>{item.statement}</p><small>{item.source}</small></div>
            <span className={`confidence ${item.confidence}`}>{item.confidence}</span>
            <button aria-label="Remove evidence" onClick={() => onUpdate({ evidence: room.evidence.filter((evidence) => evidence.id !== item.id) })}>×</button>
          </article>
        ))}
      </div>

      <div className="add-evidence">
        <div className="form-pair">
          <label>Statement<textarea value={statement} onChange={(event) => setStatement(event.target.value)} placeholder="What do we know or believe?" /></label>
          <label>Source<textarea value={source} onChange={(event) => setSource(event.target.value)} placeholder="Where did this come from?" /></label>
        </div>
        <div className="evidence-controls">
          <label>Classification<select value={type} onChange={(event) => setType(event.target.value as EvidenceType)}><option value="source">Source</option><option value="observation">Observation</option><option value="assumption">Assumption</option></select></label>
          <label>Confidence<select value={confidence} onChange={(event) => setConfidence(event.target.value as Confidence)}><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></label>
          <button className="secondary-button" disabled={!statement.trim() || !source.trim()} onClick={addEvidence}>Add to evidence</button>
        </div>
      </div>

      <div className="phase-action">
        <p><strong>{room.evidence.length} records in the evidence package.</strong><span>Echo will carry confidence and uncertainty into the decision.</span></p>
        <button className="primary-button" disabled={room.evidence.length === 0} onClick={onNext}>Prepare the decision <span>→</span></button>
      </div>
    </div>
  )
}

function DecisionPhase({ room, supportedEvidence, assumptions, onUpdate, onApprove }: { room: Room; supportedEvidence: number; assumptions: number; onUpdate: (patch: Partial<Room>) => void; onApprove: () => void }) {
  return (
    <div className="phase-content">
      <div className="phase-heading">
        <p className="eyebrow">ROOK · DECISION BOARD</p>
        <h2>Choose the next valid direction.</h2>
        <p>The recommendation is not the decision. Rook challenges it; you decide.</p>
      </div>

      <div className="decision-summary">
        <div><small>System recommendation</small><strong>{room.recommendation || 'Not prepared'}</strong></div>
        <div><small>Supporting records</small><strong>{supportedEvidence}</strong></div>
        <div><small>Open assumptions</small><strong>{assumptions}</strong></div>
        <div><small>Approval</small><strong>{room.approved ? 'Recorded' : 'Required'}</strong></div>
      </div>

      {assumptions > 0 && (
        <div className="critic-note">
          <span>ROOK'S CHALLENGE</span>
          <p>The recommendation depends on {assumptions} explicit assumption{assumptions > 1 ? 's' : ''}. Build only if the approved scope is meant to test those assumptions—not treat them as fact.</p>
        </div>
      )}

      <div className="decision-options" role="radiogroup" aria-label="Decision options">
        {decisions.map((decision) => (
          <button key={decision.id} role="radio" aria-checked={room.decision === decision.id} className={room.decision === decision.id ? 'selected' : ''} onClick={() => onUpdate({ decision: decision.id, approved: false })}>
            <span className="decision-radio" />
            <strong>{decision.label}</strong>
            <small>{decision.note}</small>
          </button>
        ))}
      </div>

      <label className="approval-field">
        Human Owner decision note
        <textarea value={room.approvalNote} onChange={(event) => onUpdate({ approvalNote: event.target.value, approved: false })} placeholder="Why are you choosing this direction, and what limits are you accepting?" />
      </label>

      <div className="phase-action approval-action">
        <p><strong>Human authorization required.</strong><span>Good Company cannot approve this decision for you.</span></p>
        <button className="primary-button" disabled={!canApprove(room)} onClick={onApprove}>Approve decision <span>✓</span></button>
      </div>
    </div>
  )
}

function LearningPhase({ room, onUpdate, onRecord }: { room: Room; onUpdate: (patch: Partial<Room>) => void; onRecord: () => void }) {
  const hasLearning = room.history.some((entry) => entry.type === 'learning')
  return (
    <div className="phase-content">
      <div className="phase-heading">
        <p className="eyebrow">ECHO · LEARNING RECORD</p>
        <h2>What happened—and what should change?</h2>
        <p>Activity becomes experience only when outcomes update what the Company believes.</p>
      </div>

      <div className="approved-record">
        <span className="approval-seal">✓</span>
        <div><small>Human decision</small><strong>{room.decision?.toUpperCase()} approved</strong><p>{room.approvalNote}</p></div>
      </div>

      <div className="form-stack learning-form">
        <label>Observed outcome<textarea value={room.outcome} onChange={(event) => onUpdate({ outcome: event.target.value })} placeholder="What actually happened after the decision?" /></label>
        <label>Learning / correction<textarea value={room.learning} onChange={(event) => onUpdate({ learning: event.target.value })} placeholder="What should Good Company believe or do differently next time?" /></label>
      </div>

      <div className="phase-action">
        <p><strong>{hasLearning ? 'Company Knowledge contains this learning.' : 'Echo is waiting for the observed outcome.'}</strong><span>{hasLearning ? 'Future Rooms can now inspect this record.' : 'Do not infer success from completion alone.'}</span></p>
        <button className="primary-button" disabled={!room.outcome.trim() || !room.learning.trim() || hasLearning} onClick={onRecord}>{hasLearning ? 'Learning recorded' : 'Update Company Knowledge'} <span>{hasLearning ? '✓' : '→'}</span></button>
      </div>
    </div>
  )
}

function CompanyView({ onColleague }: { onColleague: (colleague: Colleague) => void }) {
  return (
    <div className="company-view">
      <header className="section-header">
        <p className="eyebrow">YOUR COMPANY</p>
        <h1>Distinct minds. One shared purpose.</h1>
        <p>Each colleague protects a different responsibility. Personality makes specialization legible; contracts make it reliable.</p>
      </header>
      <div className="company-grid">
        {colleagues.map((colleague) => (
          <button key={colleague.id} onClick={() => onColleague(colleague)} style={{ '--colleague-accent': colleague.accent } as React.CSSProperties}>
            <img src={colleague.image} alt={`${colleague.name}, ${colleague.role}`} />
            <span><strong>{colleague.name}</strong><small>{colleague.role}</small></span>
          </button>
        ))}
      </div>
    </div>
  )
}

function KnowledgeView({ room }: { room: Room }) {
  const grouped = useMemo(() => ({
    evidence: room.evidence.filter((item) => item.type !== 'assumption'),
    assumptions: room.evidence.filter((item) => item.type === 'assumption'),
    learning: room.history.filter((entry) => entry.type === 'learning'),
  }), [room])

  return (
    <div className="knowledge-view">
      <header className="section-header"><p className="eyebrow">COMPANY KNOWLEDGE</p><h1>What we know—and why.</h1><p>Evidence, assumptions, decisions, and learning remain inspectable instead of dissolving into conversation.</p></header>
      <div className="knowledge-layout">
        <section><div className="section-title"><h2>Evidence</h2><span>{grouped.evidence.length}</span></div>{grouped.evidence.map((item) => <article className="knowledge-record" key={item.id}><span>{item.type}</span><p>{item.statement}</p><small>{item.source} · {item.confidence} confidence</small></article>)}</section>
        <section><div className="section-title"><h2>Assumptions</h2><span>{grouped.assumptions.length}</span></div>{grouped.assumptions.map((item) => <article className="knowledge-record assumption" key={item.id}><span>unverified</span><p>{item.statement}</p><small>{item.source}</small></article>)}</section>
        <section><div className="section-title"><h2>Learning</h2><span>{grouped.learning.length}</span></div>{grouped.learning.length ? grouped.learning.map((entry) => <article className="knowledge-record learning" key={entry.id}><span>canonical update</span><p>{entry.detail}</p><small>{formatDate(entry.createdAt)}</small></article>) : <p className="empty-copy">No outcomes have updated Company Knowledge yet.</p>}</section>
      </div>
    </div>
  )
}

function HistoryView({ room }: { room: Room }) {
  return (
    <div className="history-view">
      <header className="section-header"><p className="eyebrow">COMPANY HISTORY</p><h1>Decisions should survive the conversation.</h1><p>An inspectable record of the Room, human approvals, and learning.</p></header>
      <div className="timeline">
        {[...room.history].reverse().map((entry) => <article key={entry.id}><span className={`timeline-mark ${entry.type}`} /><div><small>{formatDate(entry.createdAt)} · {entry.type}</small><h2>{entry.title}</h2><p>{entry.detail}</p></div></article>)}
      </div>
    </div>
  )
}

function ColleagueModal({ colleague, onClose }: { colleague: Colleague; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="colleague-modal" role="dialog" aria-modal="true" aria-label={`${colleague.name} colleague card`} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close colleague card">×</button>
        <img src={colleague.image} alt={`${colleague.name}, ${colleague.role}`} />
      </section>
    </div>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(value))
}

export default App
