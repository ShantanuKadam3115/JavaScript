let stringNumber = "45"
let intNumber = Number(stringNumber)

// console.table([intNumber, typeof(intNumber)]) // 45 , number

let trial = 45
let stringTrial = String(trial)  //45 , string

// console.table([stringTrial, typeof(stringTrial)])


let x = 0
let boolx = Boolean(x)  //45 , string

// console.table([boolx, typeof(boolx)]) 


/*
Below are the result of things I tried to convert to Number
"45" -> 45 , Number
"45R" -> NaN , Number
"Shantanu" -> Nan, Number
true -> 1 , Number
null -> 0, Number -------------------------------------
undifined -> error : undifined is not difined

Below are the results of things I tried to convert to String
45 -> "45" , String
true -> "true", string
shantanu -> shantanu is not defined
1.1 -> "1.1" , string
null -> "null" , string

Below are the results of things I tried to convert to Boolean
45 -> true , boolean
shantanu -> true , boolean
"" -> false , boolean

*/

// *********************************Operations***************************************

let num1 = 100

// console.table([num1++ , ++num1]) // 100, 102

// *************************************Conversions***********************************

console.log(null == 0) //false
console.log(null <= 0) //true 
console.log(null >= 0) //true
console.log(null > 0) //false
console.log(null > 0) //false
console.log(undefined > 0) //false

/*
This is because == and >,< opertators work differently . Avoid these kind of comparisions
*/