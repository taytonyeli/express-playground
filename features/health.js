/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function checkHealth (req, res, next) {
  try {
    return res.status(200).json('healthy')
  } catch (error) {
    console.log('health error', error)
    return res.status(417).json('something went wrong')
  }
}

module.exports = {
  checkHealth
}
