const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../../db.json')); // Correct path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
