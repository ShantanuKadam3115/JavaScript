const promiseOne = new Promise((resolve, reject)=>{
     setTimeout(()=>{
        // console.log("Async task is completed")
        resolve()
     }, 1000)
})

// promiseOne.then(()=>{
//     // console.log("promise consumed");   
// })

////////////////////

const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username : "Shantanu" , email : "shantanukadam3115@gmail.com" })
    }, 1000);
})

promiseTwo.then((user)=>{
    // console.log(user)
})

///////////////////////

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username : "Parzival", game : "PUBG"})
        }else{
            reject("ERROR : No player found")
        }
    },1000)
})


// promiseFour.then((player)=>{
//     console.log(`Player is found with the name : ${player.username}`)
//     return player.username
// }).then((name)=>{
//     console.log(name)
// }).catch((error)=>{
//     console.log(error)
// })



fetch('https://api.github.com/users/shantanukadam3115')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error) => console.log(error))