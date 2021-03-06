var nss = require('../');

//
// Create an `nss` TCP server
//
var server = nss.createServer(function (socket) {
  //
  // Here `socket` will be an instance of `NsSocket`.
  //

  socket.send(['drink', 'rum']);
  socket.send(['drink', 'vodka']);

  // socket.data(['iam', 'here'], function (data) {
  //   //
  //   // Good! The socket speaks our language
  //   // (i.e. simple 'you::there', 'iam::here' protocol)
  //   //
  //   // { iam: true, indeedHere: true }
  //   //
  //   console.dir(data)
  // })
});

//
// Tell the server to listen on port `6785` and then connect to it
// using another NsSocket instance.
//
server.listen(6785);

nss().ondata(['drink', '*'], function () {
  console.log('I can mix a', this.event[2], 'drink');
  //outbound.send(['iam', 'here'], { iam: true, indeedHere: true })
}).connect(6785);