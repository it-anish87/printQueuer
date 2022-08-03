import PrintData from "../Interfaces/PrintData";

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
        setTimeout(function(that){
            that.available = true;
        },1000, this);
    }
    isAvailable(){
        return this.available;
    }
}