function NoUserFoundError (message, statusCode) {
  Error.call(this);
  Error.captureStackTrace(this, NoUserFoundError);
  this.name = 'NoUserError';
  this.message = message || 'No such user found, check user again !!!';
  this.statusCode = statusCode || 422;
}

module.exports = NoUserFoundError;
