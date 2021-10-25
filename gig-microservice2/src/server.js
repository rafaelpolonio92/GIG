const rabbitConsumer = require('./rabbitConsumer');
const server = require('http').createServer();

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

rabbitConsumer(io);
io.on('connection', (socket) => {
  console.log(`User Socket Connected: ${socket.id}`);
  socket.on('disconnect', () =>
    console.log(`User disconnected: ${socket.id} `)
  );
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
