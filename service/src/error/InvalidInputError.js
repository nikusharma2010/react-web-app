function InvalidInputError (message, statusCode) {
  Error.call(this);
  Error.captureStackTrace(this, InvalidInputError);
  this.name = 'InvalidInputError';
  this.message = message || 'Missing Mandatory Fields';
  this.statusCode = statusCode || 422;
}

module.exports = InvalidInputError;
