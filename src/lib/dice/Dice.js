export class Dice {

    constructor( sides = 6 ) {
        this.sides = sides;
    }

    static random( min = 1, max = 6 ) {
        return Math.floor(Math.random() * max) + min;
    }

    static delay( ms = 1000 ){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    roll( avoid = false ) {
        let roll = avoid;
        while ( roll === avoid ) {
            roll = Dice.random();
        }
        return roll;
    }

    sequence( length = 10 ){
        let rolls = [];
        let roll = false;
        while (rolls.length < length) {
            roll = this.roll(roll);
            rolls.push(roll);
        }
        return rolls;
    }

}