//import fs from 'fs'
const crypto = require("crypto")

const { a, b } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
})
console.log(a)
console.log(b)
export function generateKeyPairSyncCrypto(){
  debugger
  const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
  })
  return {publicKey, privateKey}
}

export function encryptText (plainText) {
  debugger
  return crypto.publicEncrypt({
    key: "alodfsfksdjfskdf",
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  },
  Buffer.from(plainText)
  )
}

export function decryptText (encryptedText) {
  return crypto.privateDecrypt(
    {
      key: fs.readFileSync('private_key.pem', 'utf8'),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256'
    },
    encryptedText
  )
}

// console.log('encryptText: ', encryptText('hello'));
// console.log('de: ', decryptText(encryptText('hello')));