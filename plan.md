1. webpack-dev-server
   1. installation ( hot, open, port)
   2. static serving (contentBase)
   3. api proxying ('/favicon.ico': 'http://pdffiller.com',
      '/api': {
        target: 'https://pdffiller-js-school.brutgroot.com',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,
      })
   4. env variables, NODE_ENV, dev/prod configurations
   5. sourcemaps (devtool, devtool table)
   6. debugging via VS Code  (debugger for chrome)
2. Async in JS
   1. Event Loop, setTimeout example, try-catch only local block
   2. Error handling in callbacks, try/catch
   3. Promises, then/catch/finally, Promise.all, Promise.race
   4. Async/Await, integration (direct, reverse) with Promises, try/catch global
3. Webpack 
   1. different entries
   2. chunks splitting
   3. dynamic import (plugins: ['@babel/plugin-syntax-dynamic-import'])