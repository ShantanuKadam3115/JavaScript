

class user {
    
    
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password  = password
    }
    
    encryptPassoword(){
        return `${this.password}-5.56`
    }

    changeUserName(){
        return this.username.toUpperCase()
    }
    
}

const userOne = new user("Parzival", "Parzival@magma", "M416")

console.log(userOne.password)

console.log(userOne.encryptPassoword())
console.log(userOne.changeUserName())

//Behind the scene

function player(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

player.prototype.encryptPassoword = function (){
    return `${this.password}-7.62`
}

player.prototype.changeUserName = function (){
    return this.username.toUpperCase()
}

const player1 = new player("voldemort", "voldemort@magma", "AKM")

console.log(player1.password)

console.log(player1.encryptPassoword())
console.log(player1.changeUserName())



