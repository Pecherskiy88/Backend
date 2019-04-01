const http = require('http');
const url = require('url');

const morgan = require('morgan');
const router = require('./src/routes/router');

const logger = morgan('combined');

const startServer = port => {

  const server = http.createServer((request, response) => {
      const parsedUrl = url.parse(request.url);
      const routerFunc = router[parsedUrl.pathname] || router.main;

      logger(request, response, () => {
        routerFunc(request, response);
      })
  });

 

  server.listen(port, err => {
    if(err){
      console.log('ohhhh now');
    }
    console.log(`server is listening ${port}`);
  })
};

module.exports = startServer;
