import { CartItem } from "./cart-item";

export class Cart {
    items: CartItem[];

    constructor(obj?: any) {
        this.items = obj && obj.items.map((jsonItem: any) => new CartItem(jsonItem)) || [];
    }

}