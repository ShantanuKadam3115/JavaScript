const score = new Number(100)
// console.log(score);

// console.log(score.toString()) // "100"
// console.log(score.toFixed(2)) //100.00

let temp = 45.264
const temp1 =1264.45

// console.log(temp.toPrecision(3)) //45.3
// console.log(temp1.toPrecision(3)) //1.26e+3

//++++++++++++++++++++++++++MATH++++++++++++++++++++++++++++++++++

/*
there are attrubute for math object. some of them are
floor
ceil
round
max
min
absolute
*/

// console.log(Math.floor((Math.random()*10))+1)

const min = 0
const max = 10

//console.log(Math.floor(Math.random() * (max - min + 1)) + min) //this is the formula for getting a random int in range of min and max

let mydate = new Date()

// console.log(typeof mydate)

console.table([
    mydate ,
    mydate.toString(),
    mydate.toDateString(),
    mydate.toJSON(),
    mydate.toLocaleString()
])


let Bday = new Date(13,1,2001 , 11, 15, 0, 0)
console.log(Bday.toLocaleString());

