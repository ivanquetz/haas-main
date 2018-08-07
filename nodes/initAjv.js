const Ajv = require('ajv')
const sift = require('sift')

module.exports = function (ctx,flow) {
  return new Promise((resolve, reject) => {
    
    console.log('initAjv_start')
    const ajv = new Ajv({allErrors: true, format: 'full'})
    
    // add keywords then need to user the same on client???     
    ajv.addKeyword('needUnique', {
      async: true,
      type: 'string',
      validate: function (schema, data) {
        var findModels = sift({id: data}, Object.values(models))
        console.log('findModels.length ', findModels.length)
        if (findModels.length > 0) return false
        else return true
      }
    })
    
    resolve(ajv)
  })
}