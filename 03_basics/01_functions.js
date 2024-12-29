function calculateCartPrice (...price){  ///rest operator
    return price
}

// console.log(calculateCartPrice(100,200,300)); //[ 100, 200, 300 ]

// ***************************************

const user = {
    username : "Shantanu",
    age : 23,
    welcomeMessage : function(){
        console.log(`Hello ${this.username}, Good Morning`)
        // console.log(this)
    }
}

// user.welcomeMessage()

// user.username ="Parzival"
// user.welcomeMessage()

//Arrow function

const pokemon1 = () => {
    return "Pikachu"
}
const pokemon2 = () =>  "Bulbasaur"


//IFFE --Immediately Invoked Function Expression

;(function Greetings(){
    console.log("Hello world");
})();
//USE ; after the IFFE and make sure it is used before as well
((name)=>{
    console.log(`Hello ${name}`)
})("shantanu");