const template = require('../misc/modelTemplate.js')
module.exports = {
  id: 'asmd',
  name: 'sd',
  description: 'asdmk',
  editable: false,
  core: true,
  schema: {
    $async: true,
    type: 'object',
    required: [],
    properties: {
      ...template,
      name: {type: 'string'}
    }
  }
}