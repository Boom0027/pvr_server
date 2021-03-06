/**
 * Bad Request error, throw this in a function when there is something wrong with the request params
 * Author: Tirthamouli Baidya
 */

const logger = require('../logger/logger')

class BadRequest extends Error {
  /**
     *
     * @param {String} message
     */
  constructor (message) {
    // Step 1: Call the parent constuctor
    super(message)

    // Step 2: Log the error
    logger.error('ERROR 400: ' + message)

    // Step 2: Set the name
    this.name = this.constructor.name

    // Step 3: Set the status
    this.status = 400
  }

  /**
     * Get the status code
     */
  statusCode () {
    return this.status
  }
}

module.exports = BadRequest
