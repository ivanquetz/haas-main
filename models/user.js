const template = require('../misc/modelTemplate.js')
module.exports = {
  id: 'user',
  name: 'model of user',
  description: '',
  editable: false,
  core: true,
  schema: {
    $async: true,
    type: 'object',
    required: [],
    properties: {
      ...template,
      groups: {type: 'array', custom: 'ref', from: 'groups', core: true}
    }
  }
}
