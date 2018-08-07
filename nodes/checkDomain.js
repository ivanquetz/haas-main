module.exports = function (req, res, next) {
  console.log('checkDomain_start')
  console.log('req.hostname', req.hostname)
  next()
}
