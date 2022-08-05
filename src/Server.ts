import PrintData from './PrintData'
import Printer from './Printer';

export default class Server {
    private id: number | string;
    private queue: Array<PrintData> //PrintData[]
    private printer: Printer;
    private intervalId: number | undefined; //for setInterval
    private pendingStop: boolean //flag 

    constructor(printerInstance: Printer){
        this.id = "Server-1";
        this.queue = [];
        this.printer = printerInstance;
        this.pendingStop = false;
    }
    init(){
        this.intervalId = setInterval(function(that: { printer: { isAvailable: () => any; }; deQueue: () => void; }){
            if(that.printer.isAvailable()){
                that.deQueue();
            }
        },1000, this)
    }
    private stop(){
            if(this.queue.length == 0){
                clearInterval(this.intervalId);
            }else{
                this.pendingStop = true;
            }
            
    }
    addQueue(printData: PrintData): void{
        this.queue.push(printData);   
    }
    private deQueue(): void{
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