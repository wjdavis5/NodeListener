var MessageQueue = require("./MessageQueue");
var MessageServer = require("./MessageServer");
//name, listenPort, messageQueue, bindCallBack, messageReceiveCallBack,closeCallback,errorCallback

function Listener(name, port) {
	this.Name = name;
	this.Port = port;
	this.MessageQueue = new MessageQueue(name);
    this.Listener = new MessageServer(name, port, this.MessageQueue);
    
}
Listener.prototype.Start = function () {
    this.Listener.Bind();
}

module.exports = Listener;