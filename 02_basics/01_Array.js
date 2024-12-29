const myarr1 = [1,2,3,4,5,6,7]


// console.log(typeof myarr1)

//Some array methods

myarr1.push(8) // [0, 1, 2, 3,4, 5, 6, 7, 8]
myarr1.pop() // [0, 1, 2, 3,4, 5, 6, 7]
myarr1.unshift(0)  // [0, 1, 2, 3,4, 5, 6, 7]
myarr1.shift() //[1, 2, 3,4, 5, 6, 7]

myarr1.includes(2) //true
const myarr2 = myarr1.join() // 1,2,3,4,5,6,7 --String


// console.log(myarr1)
// console.log(myarr2)

const myarr3 = myarr1.slice(1,3)
// console.log(myarr3) //[ 2, 3 ]
// console.log(myarr1) //[1, 2, 3,4, 5, 6, 7]

const myarr4 = myarr1.splice(1,3)
// console.log(myarr4) //[ 2, 3, 4 ]
// console.log(myarr1) //[ 1, 5, 6, 7 ]
 
/////////////////////////////////////////////////////////////////////////////////////////////////


const names = ["shantanu", "Ayush", "Tushar"]
const place = ["Adilabad", "Samistipur", "Jodhpur"]

const combined = [...names,...place] //[ 'shantanu', 'Ayush', 'Tushar', 'Adilabad', 'Samistipur', 'Jodhpur' ] spread, widely used

names.concat(place) //[ 'shantanu', 'Ayush', 'Tushar', 'Adilabad', 'Samistipur', 'Jodhpur' ]

// console.log(combined);
const zigzag = [1,2,3, [4,5,6,[7,8,9,[10]]]] 

// console.log(zigzag.flat(Infinity)) // 1,2,3,4,5,6,7,8,9,10

console.log(Array.from("Shantanu")) // ['S', 'h', 'a','n', 't', 'a','n', 'u']

// you can use array.of() to make an array of multiple elements.

