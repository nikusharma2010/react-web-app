
class InvalidInputError {
  constructor (message, statusCode) {
    this.title = 'No Data Found';
    this.message = message || 'Missing Mandatory Fields';
    this.statusCode = statusCode || 422;
  }
}

module.exports = InvalidInputError;
