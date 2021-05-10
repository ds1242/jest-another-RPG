const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon, potion) {
        super(name);
    }


    getDescription = function(){
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}
module.exports = Enemy;