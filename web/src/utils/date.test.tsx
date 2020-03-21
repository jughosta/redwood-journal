import {
  getDayCode,
  getNextDate,
  getPreviousDate,
  formatDate,
  hasNextDate,
} from './date'

describe('utils/date', () => {
  it('getDayCode runs successfully', () => {
    expect(getDayCode(new Date('2020-03-20'))).toBe('2020-03-20')
  })

  it('formatDate runs successfully', () => {
    expect(formatDate(new Date('2020-03-20'))).toBe('Friday, March 20th, 2020')
  })

  it('getNextDate runs successfully', () => {
    expect(getNextDate(new Date('2020-03-20')).getTime()).toBe(
      new Date('2020-03-21').getTime()
    )
  })

  it('getPreviousDate runs successfully', () => {
    expect(getPreviousDate(new Date('2020-03-20')).getTime()).toBe(
      new Date('2020-03-19').getTime()
    )
  })

  it('hasNextDate runs successfully', () => {
    expect(hasNextDate(new Date('2020-03-20'))).toBeTruthy()
  })
})
