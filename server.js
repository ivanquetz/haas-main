const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const bodyParser = require('body-parser')
const cors = require('cors')
// const history = require('connect-history-api-fallback')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const devMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)
// vars
var nodes = require('require-all')({ dirname: __dirname + '/nodes' })
var models = require('require-all')({ dirname: __dirname + '/models' })
var ajv = null
var db = null
// middleware chain
// app.use(nodes.checkDomain)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(devMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'silent'
}))
app.use(require('webpack-hot-middleware')(compiler))
// TODO: check for the nginx
// app.use(history())

function getCtx () {
  return {config: nodes.config, db: db, ajv: ajv, nodes: nodes, models: models, server: server}
}

async function initChain () {
  ajv = await nodes.initAjv(getCtx(), {trigger: 'app', errors: [], msg: {}})
  db = await nodes.initDb(getCtx(), {trigger: 'app', errors: [], msg: {}})
  // init sockets
  let flow = await nodes.initApp(getCtx(), {trigger: 'app', errors: [], msg: {}})
  if (flow.errors.length > 0) {
    console.log('RENDER ERROR SITE')
  } else {
    console.log('APP STARTED')
  }
  await nodes.fsModelCreate(getCtx(), {errors: [], msg: {folder: 'models', data: {id: 'user'}}})
}
initChain()
