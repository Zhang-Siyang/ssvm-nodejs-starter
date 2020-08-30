const { say, smart } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  const queryObject = url.parse(req.url,true).query;
  if (queryObject['name']) {
    res.end(say(queryObject['name']) + '\n');
  } else if (queryObject['ai']) {
    res.end(smart(queryObject['ai']) + '\n');
  } else {
    res.end(`试试访问 "http://${hostname}:${port}/?ai=在吗？" ？ \n`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
