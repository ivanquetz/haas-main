const fs = require('fs')
const sift = require('sift')
module.exports = function (ctx,flow) {
  return new Promise((resolve, reject) => {
    async function nodeWork () {
      try {
        
        var flowSchema = {
          $async: true,
          type: 'object',
          required: [],
          properties: {
            errors: {type: 'array', maxItems: 0},
            msg: {
              type: 'object',
              required: ['folder', 'data'],
              properties: {
                folder: {type: 'string'},
                data: {type: 'object'}
              }
            }
          }
        }
        flow = await ctx.nodes.validate(ctx,flow,flowSchema,flow)
        if (flow.errors.length > 0) throw flow
        console.log('fsCreate_start')
        
        var findModel = sift({id: 'model'}, Object.values(ctx.models))
        var model = findModel[0]
        
        var modelId = 'asmd'
        var modelName = 'sd'
        var modelDescription = 'asdmk'
        
        var customFields = `name: {type: 'string'}`
        var modelTemplate =
`const template = require('../misc/modelTemplate.js')
module.exports = {
  id: '${modelId}',
  name: '${modelName}',
  description: '${modelDescription}',
  editable: false,
  core: true,
  schema: {
    $async: true,
    type: 'object',
    required: [],
    properties: {
      ...template,
      ${customFields}
    }
  }
}`
        // console.log('modelTemplate', modelTemplate)
//         fs.writeFile('./models/newmodel.js', modelTemplate, (err) => {
//           if (err) {
//             console.log(err)
//             throw err
//           }
//           console.log('file saved!')
//         })
        
        
        throw flow
      } catch (f) {
        console.log('fsCreate_done')
        resolve(f)
      }
    }
    nodeWork()
  })
}