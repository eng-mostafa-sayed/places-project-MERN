class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // add the message to the super class 'Error class'
    this.code = errorCode; // add the error code as property to the error object
  }
}
module.exports = HttpError;
