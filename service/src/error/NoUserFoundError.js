
class NoUserFoundError {
  constructor (message, statusCode) {
    this.title = 'No Data Found';
    this.message = message || 'No such user found, check user again !!!';
    this.statusCode = statusCode || 422;
  }
}

module.exports = NoUserFoundError;
