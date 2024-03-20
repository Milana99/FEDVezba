import { Game } from "./game";

export class CartItem {
    game: Game;
    count: number;
    available: boolean;

    constructor(obj?: any) {
        this.game = obj && new Game(obj.game) || new Game();
        this.count = obj && obj.count || 0;
        this.available = obj && obj.available || false;
    }

}