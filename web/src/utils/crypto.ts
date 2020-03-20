import CryptoUTF8 from 'crypto-js/enc-utf8'
import CryptoAES from 'crypto-js/aes'

let secret = null
const INCORRECT_PASSPHRASE = '<incorrect passphrase>'
const COULD_NOT_DECRYPT = '<decryption failed>'

export const isSecretProvided = (): boolean => Boolean(secret)

export const setProvidedSecret = (providedSecret: string): void => {
  secret = providedSecret
}

export const encryptMessage = (message: string): string => {
  if (!secret) {
    throw Error('Encryption is not possible!')
  }
  return CryptoAES.encrypt(message, secret).toString()
}

export const decryptMessage = (message: string): string => {
  if (!secret) {
    return INCORRECT_PASSPHRASE
  }

  try {
    const bytes = CryptoAES.decrypt(message, secret)
    let decryptedMessage = bytes.toString(CryptoUTF8)

    if (!decryptedMessage && message) {
      decryptedMessage = INCORRECT_PASSPHRASE
    }

    return decryptedMessage
  } catch (error) {
    console.error(error)
  }

  return COULD_NOT_DECRYPT
}
