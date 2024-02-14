const http = require("http");
const { WebSocketServer } = require("ws");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
wsServer.on("connection", (connection, request) => {
  console.log("Surya Connected");
});
server.listen(5000, () => {
  console.log("Websocket Server listening on 5000");
});
