//Object literals
const mySym = Symbol("strawHat")

const myObject ={
    name : "Shantanu",
    age : 23,
    place : "Adilabad",
    mySym,
    isMarried : false
}

// Object.freeze(myObject) //object can't be changed
// console.log(myObject.mySym)


////////////////////Object Singleton//////////////////

const user = new Object()
user.id = 43762199
user.name = "Shantanu"
user.isMarried = false

let character ={
    name : "Parzival",
    id : 416,
    isIGL : false
}

character = {
    gun : "m4"
}
// const combined = Object.assign({},user, character) //{ id: 416, name: 'Parzival', isMarried: false, isIGL: false } not widely used
//const combined = {...user, ...character} //{ id: 416, name: 'Parzival', isMarried: false, isIGL: false }spread, widely used

//object.keys(user) and object.values(user) for all the keys and values

// console.log(user.hasOwnProperty("id")) //true

//destructioring

//const {isIGL : ii } = character //using  ii == character.isIGL

console.log(character) 