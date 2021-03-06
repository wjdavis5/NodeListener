﻿var Dgram = require("dgram");
var MessageQueue = require("./MessageQueue");
var Message = require("./Message");

function MessageServer(name,
    listenPort,
    messageQueue,
    bindCallBack,
    messageReceiveCallBack,
    closeCallback,
    errorCallback) {
    this.Name = name;
    this.MessageQueue = messageQueue;
    this.Port = listenPort;
    this.Datagram = Dgram.createSocket("udp4");
    this.BindCallBack = bindCallBack;
    this.MessageReceiveCallBack = messageReceiveCallBack;
    this.CloseCallback = closeCallback;
    this.ErrorCallback = errorCallback;

    var self = this;

    this.Datagram.on("listening", function() {
        self.OnBind(this);
    });
    this.Datagram.on("message",
        function(msg, info) {
            self.OnReceive(msg, info);
        });
    this.Datagram.on("error",
        function(err) {
            self.OnError(err, this);
    });
    this.Datagram.on("close",
        function() {
            self.OnClose(this);
        });
}

MessageServer.prototype.Bind = function () {
    console.log(this.Name + " binding to port: " + this.Port);
    this.Datagram.bind(this.Port);
};
MessageServer.prototype.OnReceive = function (message, info) {
    var msg = new Message(message, info.address, info.port);
    console.log(this.Name + " message Rx");
    this.MessageQueue.Add(msg);
    if (typeof this.MessageReceiveCallBack != "undefined") this.MessageReceiveCallBack(msg, info);
};
MessageServer.prototype.OnBind = function () {
    var address = this.Datagram.address();
    console.log(this.Name + " server listening " + address.address + ":" + address.port);
    if (typeof this.BindCallBack != "undefined") this.BindCallBack(this.Datagram);
};
MessageServer.prototype.OnError = function(error, datagram) {
    console.log(this.Name + " error: " + error);
    if (typeof this.ErrorCallback != "undefined") this.ErrorCallback(error, datagram);
};
MessageServer.prototype.OnClose = function (datagram) {
    console.log("server closing: " + this.Name);
    if (typeof this.CloseCallback != "undefined") this.CloseCallback(datagram);
};

module.exports = MessageServer;
