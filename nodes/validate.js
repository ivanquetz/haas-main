module.exports = function (ctx, flow, schema, data) {
  return new Promise((resolve, reject) => {
    ctx.ajv.validate(schema, data)
      .then(res => {
//         console.log('validate ok')
        resolve(flow)
      })
      .catch(err => {
//         console.log('validate err', err)
        for (const e in err) {
          flow.errors.push(err[e])
        }
        resolve(flow)
      })
  })
}