
// if( 2 == "2"){
//     console.log("executed") // this will get executed
// }

const Bday = "Dec"

switch (Bday) {
    case "Jan": "nope"
        break;
    case "Feb": console.log("Happy Birth Day")
        break;
    case "March": "nope"
        break;
    case "april": "nope"
        break;
    default: console.log("guess in the first four months only")
        break;
}

//falsy values
/**
 * false, 0, -0 , Bigint 0n, "", null , undifined, NaN
 */
//truthy values
// "0", "false", " ", [], {}, function(){}