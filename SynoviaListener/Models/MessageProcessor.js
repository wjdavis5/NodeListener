var Message = require("./Message");
var MessageQueue = require("./MessageQueue");

function MessageProcessor() {
    var self = this;
}

MessageProcessor.prototype.ProcessMessage = function(message) {
    console.log("Processing message");
}

