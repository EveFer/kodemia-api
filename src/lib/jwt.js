const jwt = require('jsonwebtoken')

const secret = 'supersecret'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function verify (token = '') {
  return jwt.verify(token, secret)
}

// se exporta todo el objeto de jwt y sobreescribimos las funciones (sign y verify)
module.exports = {
  ...jwt,
  sign,
  verify
}
