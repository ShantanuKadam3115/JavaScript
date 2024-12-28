var admissionNumber = 416
let schoolName = "Abhyudaya High School"
const studentName = "Shantanu Kadam"
place = "Adilabad"
let grades

// changing the studentName is not allowed as it is constant

schoolName = "VNIT Nagpur"
place = "Nagpur"
admissionNumber ="BT19ECE049"

console.table([admissionNumber, schoolName, studentName, place, grades])

/*
Mostly const and let keywords are onlu used.
Prefer not using var because of issue in block scope and functional scope
*/