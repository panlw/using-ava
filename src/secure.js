import crypto from 'crypto'

const DEF_RAND_LEN = 64
const rand = function (len) {
  return crypto.randomBytes(len || DEF_RAND_LEN).toString('base64')
}
const DEF_SECURE_KEY = rand()

export default {
  /**
   * Default secure key.
   * @static {String}             Default secure key
   */
  key: DEF_SECURE_KEY,
  /**
   * Generate a random string.
   * @param  {Integer} [len=64]   Count of randome bytes
   * @return {String}
   */
  rand,
  /**
   * Hash by SHA1.
   * @param  {String|Buffer} data Original data
   * @return {String}             Hashed string (HEX)
   */
  sha1: function (data) {
    return crypto
      .createHash('sha1')
      .update(data)
      .digest('hex')
  },
  /**
   * Signed by SHA256.
   * @param  {String|Buffer} data Original data
   * @param  {String} [secret]    Secret key
   * @return {String}             Signed string (BASE64)
   */
  sign: function (data, secret) {
    return crypto
      .createHmac('sha256', secret || DEF_SECURE_KEY)
      .update(data)
      .digest('base64')
      .replace(/=+$/, '')
  }
}
