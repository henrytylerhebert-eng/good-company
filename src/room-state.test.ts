import { describe, expect, it } from 'vitest'
import { seedRoom } from './data'
import { canApprove, createRoom, getRecommendation } from './room-state'

describe('Good Company authority rules', () => {
  it('routes an unsupported room to research', () => {
    expect(getRecommendation(createRoom('New work'))).toBe('research')
  })

  it('requires a human note before approval', () => {
    expect(canApprove({ ...seedRoom, decision: 'build', approvalNote: '' })).toBe(false)
    expect(canApprove({ ...seedRoom, decision: 'build', approvalNote: 'I accept this scope.' })).toBe(true)
  })

  it('does not treat a low-confidence assumption as build-ready', () => {
    expect(getRecommendation(seedRoom)).toBe('research')
  })
})
