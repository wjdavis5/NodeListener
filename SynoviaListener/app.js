var Listener = require("./Models/Listener");
var Cluster = require("cluster");
var Os = require("os");
var Workers = Os.cpus().length;
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
var port = 20500;
Cluster.on("fork", function(worker) {
    //console.log(worker);
});
Cluster.on("listening", function(worker, address) {
console.log(
    "a");
});
Cluster.on("error", function (worker) {
    console.log(
        worker);
});

if (Cluster.isMaster) {
    // Fork workers.
    for (var I = 0; I <Workers; I++) {
        var f = Cluster.fork();
        f.on("error", function (worker) {
            console.log(
                worker);
        });
    }
} else {
   /* var CalAmpListener = new Listener("Calamp", 20500);
    var MicronetListener = new Listener("Micronet", 20800);
    CalAmpListener.Start();
    MicronetListener.Start();
    */
    console.log(port++);
   server.bind(port++);
}




