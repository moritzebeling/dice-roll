export class Settings {

    constructor( options = {} ) {
        this.dices = options.dices || 1;
        this.sides = options.sides || 6;
        this.colors = options.colors || false;
    }

}