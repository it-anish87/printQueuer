import PrintData from "./PrintData";

export default class Printer {
    id: number | string;
    available: boolean;

    constructor(){
        this.id = 'Printer-1';
        this.available = true;
    }
    print(printData: PrintData){
        this.available = false;
        console.log(printData.clientId, printData.data);
        setTimeout(function(that: { available: boolean; }){
            that.available = true;
        },1000, this);
    }
    private isAvailable(): boolean{
        return this.available;
    }
}