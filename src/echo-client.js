var net = require('net');
var fs = require('fs');

var client = net.createConnection("/tmp/echo1.sock");

client.on("connect", function() {
  console.log('client connect');
  client.write('woopdi dooo\r\n');
});

client.on("data", function(data) {
    console.log("client data", data.toString());

    console.log("client data sgould be shown line above");
});