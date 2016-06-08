var Message = require("./Message");

function MessageQueue(name) {
	this.Name = name;
    this.Queue = new Array();
    var self = this;
}

MessageQueue.prototype.Add = function(message) {
    this.Queue.unshift(message);
};
MessageQueue.prototype.Take= function () {
    return this.Queue.pop();
}
module.exports = MessageQueue;