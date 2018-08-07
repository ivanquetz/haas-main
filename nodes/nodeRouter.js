module.exports = function (ctx, flow) {
  return new Promise((resolve, reject) => {
    async function nodeWork () {
      var triggers = [
        {id: 'app', name: 'triggers.system', description: ''},
        {id: 'client', name: 'triggers.client', description: ''},
        {id: 'dbafter', name: 'triggers.dbafter', description: ''}
      ]
      var nodes = [
        {trigger: 'client', operation: 'fsModelFind', auth: true},
        {trigger: 'client', operation: 'fsModelCreate', auth: true},
        {trigger: 'client', operation: 'fsModelUpdate', auth: true},
        {trigger: 'client', operation: 'fsModelDelete', auth: true},
        // {trigger: 'client', operation: 'fsNodeFind', auth: true},
        // {trigger: 'client', operation: 'fsNodeCreate', auth: true},
        // {trigger: 'client', operation: 'fsNodeUpdate', auth: true},
        // {trigger: 'client', operation: 'fsNodeDelete', auth: true},
      ]
      var flowSchema = {
        $async: true,
        type: 'object',
        required: [],
        properties: {
          
        }
      }
    }
    nodeWork()
  })
}