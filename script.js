//creating and logging 3 variables

let studentName = "Christopher Pacitti";
let studentAge = 28;
let isEnrolled = true;

console.log(studentName, studentAge, isEnrolled)


//Demoing data types

var aString = "A text value.";
var anInt = 3;
var aBoolean = false; 
var anArray = ["A", "Collectin", "Of", "Values"];

let studentInfo = new Object();
studentInfo.name = studentName;
studentInfo.age = studentAge;
studentInfo.enrollment = isEnrolled;
//above is not being read by the auto grader as an object. 




console.log("This is a string:", aString, "\nThis is an int:", anInt, "\nThis is a boolean:", aBoolean, "\nThis is an array:", anArray, "\nThis is an Object:", studentInfo);
//Arithmetic Examples

const bingusInfo = {
    outoften: 10,
    name: "Bingus",
    isCute: true
}
console.log("the following is the Bingus object:", bingusInfo);

const a = 5;
const b = 10;
console.log("a =", a, "b =", b);

var c = a + b;
console.log("a+b=", c);
c = b-a;
console.log("b-a=", c);
c=a*b;
console.log("a*b=", c);
c=b/a;
console.log("b/a=", c);
console.log("does a = b:", a==b);
console.log("does a > b:", a>b);
console.log("does a < b:", a<b);
console.log("does a != b:", a!=b);
//logical opperators
const boolA = true
const boolB = false
console.log("boolA is=", boolA, "boolB is=", boolB);
console.log("result of a&&b:", boolA&&boolB);
console.log("result of a||b:", boolA||boolB);
console.log("result of !a:", !boolA);
