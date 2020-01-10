const handler = require('serve-handler');
const http = require('http');
const options = {
    public: 'build',
    "headers": [
        {
          "source" : "*",
          "headers" : [{
            "key" : "Cache-Control",
            "value" : "max-age=0",
            "key": "Last-Modify",
            "value": new Date()
          }]
        }
      ]
}
const server = http.createServer((request, response) => {
  const url = request.url
  if (url === '/0.css') {
      setTimeout(() => {
          return handler(request, response, options);
      }, 10000);    // serve the request after 10 seconds
  } else {
    return handler(request, response, options);
  }
})
 
server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});