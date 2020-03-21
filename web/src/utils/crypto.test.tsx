import { setProvidedSecret, encryptMessage, decryptMessage } from './crypto'

describe('utils/crypto', () => {
  beforeEach(() => {
    setProvidedSecret('test')
  })
  it('encrypts successfully', () => {
    expect(encryptMessage('Hi there').startsWith('U2FsdGVkX1')).toBeTruthy
  })
  it('decrypts successfully', () => {
    expect(decryptMessage('U2FsdGVkX19XV8ELpoqWOoX7/RcPowGn5Al0CRayBDU=')).toBe(
      'Hi there'
    )
  })
})
