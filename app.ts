import Server from "./src/Server";
import Client from "./src/Client";
import Printer from "./src/Printer";

let myPrinter = new Printer();
let myServer = new Server(myPrinter);
myServer.init();
let cl1 = new Client("Client-1", myServer);
let cl2 = new Client("Client-2",myServer);
let cl3 = new Client("Client-3", myServer);
/*
setTimeout((cl1,cl2,cl3)=>{
cl1.print("Hi");
cl2.print("35435");
cl1.print("abdedr");
cl3.print("2134234");
cl3.print("qweqwe");
cl1.print("qqef34f");
cl2.print("wewerfff");
},3000,cl1,cl2,cl3);
*/
cl1.print("Hi");
cl2.print("35435");
cl1.print("abdedr");
cl3.print("2134234");
cl3.print("qweqwe");
cl1.print("qqef34f");
cl2.print("wewerfff");
setTimeout((that: { stop: () => void; })=>{
    that.stop();
}, 5000, myServer);
