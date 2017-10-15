export class Item{
    id:number;
    constructor(private text?:string,private checked?:boolean){        
    }
    getText():string{
        return this.text;
    }
    getChecked():boolean{
        return this.checked;
    }
}