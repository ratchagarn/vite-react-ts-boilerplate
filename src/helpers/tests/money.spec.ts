import { expect } from 'vitest'

import { bahtToSatang, satangToBaht } from 'helpers/money'

describe('helper: money', () => {
  it('bahtToSatang', () => {
    expect(bahtToSatang(200)).toBe(20000)
    expect(bahtToSatang(null)).toBe(null)
    expect(bahtToSatang(undefined)).toBe(null)
  })

  it('satangToBaht', () => {
    expect(satangToBaht(30000)).toBe(300)
    expect(satangToBaht(null)).toBe(null)
    expect(satangToBaht(undefined)).toBe(null)
  })
})
