import { Product } from "../Models";

export class AddProducts{
    static readonly type = '[Products] Add'
    constructor(public Products:Product[]){}
}

export class IncreaseQuantity{
    static readonly type = '[Product] Increase'
    constructor(public id:number){}
}

export class DecreaseQuantity{
    static readonly type = '[product] decrease'
    constructor(public id:number){}
}
