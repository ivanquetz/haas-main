const template = require('../misc/modelTemplate.js')

module.exports = {
  id: 'model',
  name: 'model of model',
  description: '',
  editable: false,
  core: true,
  schema: {
    $async: true,
    type: 'object',
    required: [],
    properties: {
      ...template,
      schema: {type: 'object', core: true}
    }
  }
}
