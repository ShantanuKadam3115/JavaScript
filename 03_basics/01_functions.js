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
        console.log(this)
    }
}

user.welcomeMessage()

user.username ="Parzival"
user.welcomeMessage()