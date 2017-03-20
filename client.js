var WebSocket = require('ws');

var ws = new WebSocket('ws://127.0.0.1:8080');

function WebSocketOpen() {
    'use strict';
    console.log("open");
    var nickname = 'sakari';
    this.send('NICK ' + nickname + '\r\n');
    this.send('USER ' + nickname + ' * 0 :' + nickname + '\r\n');
    
}

ws.onopen = WebSocketOpen;

ws.onerror = function(err) {
 console.log('err', err);
};

ws.onmessage = function(msg) {
 console.log('msg', msg);
}

ws.onclose = function() {
 console.log('close');
}