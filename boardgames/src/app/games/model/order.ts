import { Cart } from "./cart";

export class Order {
    date: Date;
    name: string;
    address: string;
    e_mail: string;
    tel: string;
    cart: Cart;

    constructor(obj?: any) {
        this.date = obj && obj.date || null;
        this.name = obj && obj.name || null;
        this.address = obj && obj.address || null;
        this.e_mail = obj && obj.e_mail || null;
        this.tel = obj && obj.tel || null;
        this.cart = obj && new Cart(obj.cart) || new Cart();
    }
}