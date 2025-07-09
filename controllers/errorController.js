function throwError(req, res, next) {
  throw new Error("Intentional 500 Error for testing")
}
module.exports = { throwError }