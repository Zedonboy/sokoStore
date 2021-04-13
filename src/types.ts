export interface IProduct {
    name : string
    price: number
    discount?: number
    photo : string
    currency: string
    desc ?: string
}

export class Category {
    name : string
    count : number
    constructor(name : string, count : number){
        this.name = name
        this.count = count
    }
}

export class Product implements IProduct{
    constructor(name : string, price : number, photo : string, currency : string, discount?:number, desc ?: string){
        this.name = name
        this.price = price
        this.discount = discount
        this.photo = photo
        this.currency = currency
        this.desc = desc
    }
    name: string;
    price: number;
    discount?: number | undefined;
    photo: string;
    currency: string;
    desc?: string | undefined;
}

export interface IBagItem {
    product : IProduct
    cost: number
    qty: number
}

export class BagItem implements IBagItem{
    product: IProduct;
    cost: number;
    qty: number;
    
    constructor(p : IProduct, cost : number, qty : number){
        this.product = p
        this.cost = cost
        this.qty = qty
    }
}

export enum OrderStatus {
    DELIVERED = "delivered",
    SHIPPED = "shipped"
}
export interface IOrder {
    code : string
    status : OrderStatus
    house : string
}

enum Status {
    LOADING = "loading",
    ERROR = "error",
    OK = "ok",
}


export class StoreState {
    value : any;
    status : Status = Status.OK;
    error = null;
}