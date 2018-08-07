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

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// TODO: HISTORY API FALLBACK check for the nginx
// app.use(history())

// refresh CTX
function getCtx () {
  return {config: nodes.config, db: db, ajv: ajv, nodes: nodes, models: models, server: server}
}

async function initChain (ctx,flow) {
  try {
    // init ajv
    ajv = await nodes.initAjv(getCtx(),{errors: [], msg: {}})

    // check config
    flow = await ctx.nodes.checkConfig(getCtx(),flow)
    if (flow.errors.length > 0) {
      console.log('config bad', flow)
      throw flow
    }
    // TODO: init db
    // TODO: init sockets
    throw flow
  } catch (f) {
    if (f.errors.length > 0) {
      console.log('SOMETHING WRONG')
      // render error page
      app.use(express.static('error'))
    } else {
      console.log('initChain_done', f)
      // render app, or another site depends on domain
      // app.use(nodes.checkDomain)
      app.use(devMiddleware(compiler, {
        noInfo: false,
        publicPath: webpackConfig.output.publicPath,
        logLevel: 'silent'
      }))
      app.use(require('webpack-hot-middleware')(compiler))
    }
    // init server
    app.listen(ctx.config.port, '0.0.0.0', (err) => {
      if (err) console.log('app err', err)
      console.log('Server started at port: ' + ctx.config.port)
    })
  }
}
initChain(getCtx(), {errors: [], msg: {}})
