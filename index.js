const jsonServer = require("json-server");
const { json } = require("stream/consumers");
const server = jsonServer.create();
const router = jsonServer.router("eventos.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);

server.listen(port);