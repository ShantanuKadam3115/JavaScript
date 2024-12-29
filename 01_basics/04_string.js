/*
let nameStack = "ShantanuOP"
console.table([nameStack, typeof(nameStack)])

let container1 = nameStack

console.log(container1)

nameStack = "NotOP"

console.log(container1)

console.log()

let nameHeap = new String('ParzivalOP')
console.table([nameHeap, typeof(nameHeap)])

let container2 = nameHeap

console.log(container2)

nameHeap = "notYetOp"

console.log(nameHeap)
console.log(container2)
*/

let temp = "ShantanuKadam2OP"

console.table([
    temp.length,
    temp.toUpperCase(),
    temp.slice(-16 , 4),
    temp.substring(0,8),
    temp.replace("uK", "u.K"),
    temp.includes("Kadam"),
    temp.split("2")

])





