import { getDecimal, isSexagesimal } from './Geo'

/* global test, expect */

test('isSexagesimal', () => {
  expect(isSexagesimal()).toBe(false)
  expect(isSexagesimal('51° 29\' 46" N')).toBe(true)
})
test('getDecimal', () => {
  expect(getDecimal('51° 29\' 46" N')).toEqual({ lat: 51.49611111111111 })
  expect(getDecimal('51 29\' 46" N')).toEqual({ lat: 51.49611111111111 })
  // expect(getDecimal('51 29 46" N')).toEqual({ lat: 51.49611111111111 })
  // expect(getDecimal('51 29 46 N')).toEqual({ lat: 51.49611111111111 })
  expect(getDecimal('45 05.4653\'N, 69 05\'41.96"'))
    .toEqual({ lat: 45.09108833333333, lon: 69.09498888888888 })
})
