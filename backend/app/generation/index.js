const {REFRESH_RATE, SECONDS }= require("../config");
const Dragon = require('../dragon');
//Sets the refresh rate
const refreshRate =  REFRESH_RATE * SECONDS;


class Generation {
    constructor() {
       this.expiration = this.calculateExpiration();
    }

    calculateExpiration() {
        //gets random number and sets to experationPeriod
        const expiratonPeriod = Math.floor(Math.random() * (refreshRate/2));

        //Based on input it will give the msUntilExpiration a random value by perfomring 2 diff operations 
        const msUntilExpiration = Math.random() < 0.5 ?
        refreshRate - expiratonPeriod :
        refreshRate + expiratonPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon(){
        if(Date.now() > this.expiration){
            throw new Error(`This generation expired on ${this.expiration}`);
        }

        return new Dragon();
    }
}

module.exports = Generation;