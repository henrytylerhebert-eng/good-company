import { seedRoom } from './data'
import type { DecisionState, Room } from './types'

export const STORAGE_KEY = 'good-company-room-v01'

export function createRoom(title = 'Untitled Room'): Room {
  const now = new Date().toISOString()
  return {
    ...seedRoom,
    id: `room-${Date.now()}`,
    title,
    intent: '',
    human: '',
    desiredProgress: '',
    success: '',
    phase: 'frame',
    evidence: [],
    recommendation: null,
    decision: null,
    approved: false,
    approvalNote: '',
    outcome: '',
    learning: '',
    createdAt: now,
    updatedAt: now,
    history: [
      {
        id: `history-${Date.now()}`,
        type: 'room',
        title: 'Room opened',
        detail: `${title} entered framing.`,
        createdAt: now,
      },
    ],
  }
}

export function getRecommendation(room: Room): DecisionState {
  const supportedEvidence = room.evidence.filter((item) => item.type !== 'assumption')
  const hasContract = Boolean(room.intent && room.human && room.desiredProgress && room.success)

  if (!hasContract || supportedEvidence.length === 0) return 'research'
  if (room.evidence.some((item) => item.type === 'assumption' && item.confidence === 'low')) return 'research'
  return 'build'
}

export function canApprove(room: Room): boolean {
  return Boolean(room.decision && room.approvalNote.trim())
}

export function loadRoom(): Room {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? (JSON.parse(stored) as Room) : seedRoom
  } catch {
    return seedRoom
  }
}

export function persistRoom(room: Room): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(room))
}
