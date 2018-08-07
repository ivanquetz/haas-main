module.exports = function (ctx, flow) {
  return new Promise((resolve, reject) => {
    async function nodeWork () {
      try {
        console.log('initApp_start')
        
        flow = await ctx.nodes.checkConfig(ctx, flow)
        if (flow.errors.length > 0) throw flow
        console.log('config good')
        // '0.0.0.0',
        ctx.server.listen(ctx.config.port, '0.0.0.0', () => {
          console.log('Server started at port: ' + ctx.config.port)
        })

        throw flow
      } catch (f) {
        console.log('initApp_done')
        resolve(f)
      }
    }
    nodeWork()
  })
}