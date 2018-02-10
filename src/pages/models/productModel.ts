export class Product {
    productName:string;
    productAmount:string;
     size: string;
    userId?:string;
    listId?: string;
    isActive:boolean

    constructor(productName:string, productAmount:string, size: string ,isActive:boolean, userId?:string, listId?: string){
        this.productAmount= productAmount;
        this.productName =productName;
        this.size =size;
        this.userId =userId;
        this.listId =listId;
        this.isActive =isActive;
    }
}