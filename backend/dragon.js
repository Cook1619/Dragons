const TRAITS = require("./traits");
//The set default properties
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    //Gets a date based on when the object is actually created, not when the file is being evaluated
    get birthdate(){
        return new Date();
    },
    get randomTraits(){
        //Sets empty array
        const traits = [];
        //iterates over the TRAITS array from traits.json
        TRAITS.forEach(TRAIT => {
            //sets a variable for Trait.type and Trait.values
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                //gets a random value from the json file using the length 
                Math.floor(Math.random() * traitValues.length)
            ];
            traits.push({traitType, traitValue});
        });
        return traits;
    }
}

class Dragon {
    //introducing in arguments in with {} ensures order doesnt mattter when creating a new instance of the object
    //Setting a default object if the incoming one is undefined 
    constructor({birthdate, nickname, traits} = {}){
        //Setting up properties for the dragon class
        // || sets up default properties if known are given
        this.birthdate =  birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}
//Exports the dragon class for use in another file
module.exports = Dragon;