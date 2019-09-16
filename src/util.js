exports.logger = console

const { logger } = this

exports.catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next)

// eslint-disable-next-line no-unused-vars
exports.developmentErrors = (err, req, res, next) => {
  logger.error(err)
  logger.error(err.message)
  // logger.error(req);
  res.status(err.status || 500)
  res.send(JSON.stringify(err))
}

// eslint-disable-next-line no-unused-vars
exports.productionErrors = (err, req, res, next) => {
  logger.error(err)
  // logger.error(req);
  res.status(err.status || 500)
  res.send(err.message)
}
