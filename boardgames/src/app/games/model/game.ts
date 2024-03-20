export class Game {
    id: number;
    name: string;
    imageURL: string;
    description: string;
    price: number;
    playtime: number;
    min_age: number;
    min_players: number;
    max_players: number;
    complexity: number;
    mechanics: string[];
    designer: string;
    publisher: string;
    available_count: number;

    constructor(obj?: any) {
        this.id = obj && Number(obj.id) || Number.NaN; 
        this.name = obj && obj.name || null;
        this.imageURL = obj && obj.imageURL || null;
        this.description = obj && obj.description || null;
        this.price = obj && obj.price || Number.MAX_VALUE;
        this.min_players = obj && obj.min_players || Number.NaN;
        this.max_players = obj && obj.max_players || Number.NaN;
        this.playtime = obj && obj.playtime || Number.NaN;
        this.min_age = obj && obj.min_age || Number.NaN;
        this.complexity = obj && obj.complexity || Number.NaN;
        this.mechanics = obj && obj.mechanics.map((mechanic: any) => String(mechanic)) || [];
        this.designer = obj && obj.designer || null;
        this.publisher = obj && obj.publisher || null;
        this.available_count = obj && obj.available_count || Number.NaN;
    }
}