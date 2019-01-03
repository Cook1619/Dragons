//The set default properties
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    //Gets a date based on when the object is actually created, not when the file is being evaluated
    get birthdate(){
        return new Date();
    }
}

class Dragon {
    //introducing in arguments in with {} ensures order doesnt mattter when creating a new instance of the object
    //Setting a default object if the incoming one is undefined 
    constructor({birthdate, nickname} = {}){
        //Setting up properties for the dragon class
        // || sets up default properties if known are given
        this.birthdate =  birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}
//Exports the dragon class for use in another file
module.exports = Dragon;