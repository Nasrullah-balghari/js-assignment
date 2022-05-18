// var totalCost = (1 + 3) * 4;

// console.log(totalCost);
// var firstName = "Nasir";
// var lastName = " Balghari";
// alert(firstName +" "+ lastName)
// var message = "Thanks, ";
//  var userName = "Susan";
//  var banger = "!";
//  var customMess = message + userName + banger;
// //  alert(customMess);
// var str = "nasir" //string
// var num = 23 //number
// var bool = true // Boolean
// var nul = null; //null
// var msg = "Enter your name"
// var userName = msg;

// console.log("hello",userName);
//  var age = +prompt("Enter your age");

//  console.log(age + 2);
 
// var num1 = +prompt("Enter num1");
// var num2 = +prompt("Enter num2");
// var result = num1 - num2;
// document.write(result);

var num1 = +prompt("Enter your first number");
var opt = prompt("enter operator (+ - * /)");
var num2 = +prompt("Enter your second number");
var result;


if (opt==="+") {
    result = num1 + num2;
   
}

if (opt==="-") {
    result =num1 - num2;
    
}

if (opt==="*") {
    result = num1 *num2;
   
}
if (opt==="/") {
    result = num1/num2;
    
}
if (opt==="**") {
    result = (num1) ** (num2);
    
}
console.log(result);