var webpack=require('webpack');
var ET = require('extract-text-webpack-plugin');
module.exports={
  entry:{
    app: __dirname + '/src/scripts/app.js'
  },
  devtool: 'source-map',
  output :{
    path: __dirname + '/prd',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },
  //启动webserver
  devServer: {
    contentBase: __dirname + '/prd',
    port: 80,
    inline: true,
    historyApiFallback:true,
    host:'10.9.163.35',
    proxy: {
      '/vuejson/*': {
        target: 'http://www.htmlk.cn:8080',
        secure: false
        // 替代路径（ps：将vuejson/替换）
        // pathRewrite: {
        //   '^/vuejson/': ''
        // }
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test:/\.js$/,
        loader:'babel'
      },
      {
        test:/\.scss$/,
        loader: ET.extract('style','css!sass')
      }
      ,
      {
        test:/\.string$/,
        loader: 'string'
      }
      ,{
        test:/\.vue$/,
        loader:'vue'
      }
    ]
  },
  //vue
  vue:{
    loaders:{
      js:'babel'
    }
  },
  //plugins
  plugins: [
    new ET('bundle.css')
    // new webpack.optimize.UglifyJsPlugin()
  ]
}
