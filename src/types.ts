export type Phase = 'frame' | 'evidence' | 'decide' | 'learn'
export type View = 'room' | 'company' | 'knowledge' | 'history'
export type EvidenceType = 'source' | 'observation' | 'assumption'
export type Confidence = 'high' | 'medium' | 'low'
export type DecisionState = 'build' | 'research' | 'hold' | 'reject' | 'reframe'

export interface EvidenceItem {
  id: string
  statement: string
  source: string
  type: EvidenceType
  confidence: Confidence
  createdAt: string
}

export interface HistoryEntry {
  id: string
  type: 'room' | 'decision' | 'learning'
  title: string
  detail: string
  createdAt: string
}

export interface Room {
  id: string
  title: string
  intent: string
  human: string
  desiredProgress: string
  success: string
  phase: Phase
  evidence: EvidenceItem[]
  recommendation: DecisionState | null
  decision: DecisionState | null
  approved: boolean
  approvalNote: string
  outcome: string
  learning: string
  createdAt: string
  updatedAt: string
  history: HistoryEntry[]
}

export interface Colleague {
  id: string
  name: string
  role: string
  protects: string
  question: string
  contribution: string
  accent: string
  image: string
  phase: Phase
}
