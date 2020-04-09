module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.omdbapi.com/',
        secure: false, 
        pathRewrite: {
          '^/api': '/'
        },
        changeOrigin: true
      }
    }
  }
}