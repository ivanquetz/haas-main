module.exports = {
  _id: {type: 'string', core: true},
  id: {type: 'string', needUnique: true, core: true},
  name: {type: 'string', core: true},
  description: {type: 'string', core: true},
  createdAt: {type: 'number', core: true},
  updatedAt: {type: 'number', core: true},
  deleted: {type: 'boolean', core: true}
}