export const bahtToSatang = (v: number | null | undefined) =>
  v ? v * 100 : null

export const satangToBaht = (v: number | null | undefined) =>
  v ? v / 100 : null
