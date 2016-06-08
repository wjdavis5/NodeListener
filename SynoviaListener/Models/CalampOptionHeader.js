function CalampOptionHeader() {
    this.MobileIdTypeLength = 1;
    this.HeaderBytes = [];
    this.MessagePointer = 0;
    this.AuthenticationFlag = false;
    this.AuthenticationLength = 0;
    this.AuthenticationWord = "";
    this.ForwardingAddress = "";
    this.ForwardingFlag = false;
    this.ForwardingLength = 0;
    this.ForwardingOperation = 0;
    this.ForwardingPointer = 0;
    this.ForwardingPort = 0;
    this.ForwardingProtocol = 17;
    this.HeaderFlag = false;
    this.HeaderValue = 0;
    this.MobileId = "";
    this.MobileIdFlag = false;
    this.MobileIdLength = 0;
    this.MobileIdType = 0;//Off = 0,MobileId = 1,Imei = 2,Imsi = 3,UserDefined = 4,PhoneNumber = 5,IpAddress = 6,
    this.MobileIdTypeFlag = false;
    this.RoutingField = "";
    this.RoutingFlag = false;
    this.RoutingLength = 0;
}

CalampOptionHeader.prototype.Parse = function (msgBytes){
    
}