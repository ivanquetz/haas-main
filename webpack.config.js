const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: ['webpack-hot-middleware/client', './client/main.js']
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.svg'],
    alias: {
      'vue': 'vue/dist/vue.js',
      'layouts': path.resolve(__dirname, 'client/layouts/')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        // exclude: /node_modules(\/|\\)(?!(framework7|framework7-vue|template7|dom7)(\/|\\)).*/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [ 'transform-runtime', 'transform-object-rest-spread' ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                  }
                },
                css: 'vue-style-loader!css-loader!stylus-loader',
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
              }
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        // exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        // exclude: /node_modules/,
        loader: 'pug-plain-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './client/index.html', inject: true}),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}