import Server from "./Server";

export default class Client {
    private id: string;
    private serverInstance: Server;
    constructor(id: string, serverInstance: Server){
        this.id = id;
        this.serverInstance = serverInstance;
    }
    print(data: string){
        this.serverInstance.addQueue({
            clientId: this.id,
            data
        })
    } 
}

