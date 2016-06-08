var Listener = require("./Models/Listener");
var Cluster = require("cluster");
var Os = require("os");
var Workers = Os.cpus().length;
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
var port = 20500;
var CalAmpListener = new Listener("Calamp", 20500);
var MicronetListener = new Listener("Micronet", 20800);

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
    CalAmpListener.Start();
    MicronetListener.Start();
}




