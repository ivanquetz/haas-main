module.exports = function (ctx,flow) {
  return new Promise((resolve, reject) => {
    console.log('initDb_start')
    resolve({name: 'oleg'})
  })
}