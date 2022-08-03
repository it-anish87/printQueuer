import PrintData from '../Interfaces/PrintData'
import Printer from './Printer';

export default class Server {
    id: number | string;
    queue: Array<PrintData> //PrintData[]
    private printer: Printer;
    private intervalId: number; //for setInterval
    private pendingStop: boolean //flag 

    constructor(printerInstance: Printer){
        this.id = "Server-1";
        this.queue = [];
        this.printer = printerInstance;
        this.pendingStop = false;
    }
    init(){
        this.intervalId = setInterval(function(that){
            if(that.printer.isAvailable()){
                that.deQueue();
            }
        },1000, this)
    }
    stop(){
            if(this.queue.length == 0){
                clearInterval(this.intervalId);
            }else{
                this.pendingStop = true;
            }
            
    }
    addQueue(printData: PrintData){
        this.queue.push(printData);   
    }
    deQueue(){
        console.log(this.queue);
        const printData: PrintData | undefined = this.queue.shift();
        if(printData){
            this.printer.print(printData);
        }else{
            if(this.pendingStop == true){
                clearInterval(this.intervalId); 
            }
        }
    }
}