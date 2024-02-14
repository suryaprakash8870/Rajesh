// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Send initial message
  ws.send('Welcome to the WebSocket server!');

  // Handle incoming messages
  ws.on('message', function incoming(message) {
    console.log('Received message:', message);
    // Broadcast the received message to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle disconnection
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});
