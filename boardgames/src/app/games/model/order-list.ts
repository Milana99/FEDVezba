import { Order } from "./order";

export class OrderList {
    count: number;
    results: Order[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((jsonGame: any) => new Order(jsonGame)) || [];
    }
}