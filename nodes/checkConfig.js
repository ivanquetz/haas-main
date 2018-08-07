module.exports = function (ctx, flow) {
  return new Promise((resolve, reject) => {
    async function nodeWork () {
      try {
        
        var flowSchema = {
          $async: true,
          type: 'object',
          required: ['msg', 'errors'],
          properties: {
            msg: {type: 'object'},
            errors: {type: 'array', maxItems: 0}
          }
        }
        flow = await ctx.nodes.validate(ctx,flow,flowSchema,flow)
        if (flow.errors.length > 0) throw flow
        console.log('checkConfig_start')
        
        var configSchema = {
          $async: true,
          type: 'object',
          required: ['appKey', 'apiKey', 'masterKey', 'mode', 'port', 'mongoUrl'],
          properties: {
            appKey: {type: 'string'},
            apiKey: {type: 'string'},
            masterKey: {type: 'string'},
            mode: {type: 'string'},
            port: {type: 'number'},
            mongoUrl: {type: 'string'}
          }
        }
        flow = await ctx.nodes.validate(ctx,flow,configSchema,ctx.config)
        if (flow.errors.length > 0) throw flow
        
        throw flow
      } catch (f) {
        console.log('checkConfig_done')
        resolve(f)
      }
    }
    nodeWork()
  })
}