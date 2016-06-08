function Message(msg, originatingAddress, originatingPort) {
	this.ByteArray = msg;
	this.OriginatingAddress = originatingAddress;
	this.OriginatingPort = originatingPort;
}

module.exports = Message;