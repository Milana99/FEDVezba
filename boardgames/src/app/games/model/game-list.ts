import { Game } from "./game";

export class GameList {
    count: number;
    results: Game[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((jsonGame: any) => new Game(jsonGame)) || [];
    }
}