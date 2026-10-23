// Ways to print in javascript 

// console.log("hello not sure");
// document.write("hello use my js for server!");
// alert("this is an alert");

// Javascript console API
// console api mean is Application programming interface 


//   console.log("hello world");
//   console.warn("dont use h1 tag!");
//   console.error("this is an error!");

/*
Multi
 line 
comments 
*/

// 3 Javascript Variables
//What is Variables - Containers to store data values 
var number1 = 26;
var number2 = 20;
var number3 = 200;
// console.log(number1+number2+number3);

// 4. Data types in javascript 
// Numbers 
var num1 = 406;
var num2 = 10.5;
var num2 = 1020;

// String 
var str1 = "this is a string"
var str2 = "This is also a string";

// Objects
var marks = {
  hussain: 80,
  adil: 90,
  hanan: 80,
  harry: 1000,
}

// console.log("marks");

// Booleans
var a = true;
var b = false;
// console.log(a,b);

// var und= undefined;
// console.log(undefined);
var und = 10;

var n = null;
// console.log(n)
/*
At a very high level there are two types of data types 
in javascript      
1.primitive data types : Undefined , null, boolean ,number , string ,symbols
2.Reference data types : Arrys , Objects 

*/
// var arr=[0,1,2,"hussain",4,5];
// console.log(arr);


// Opreators in javascript 
// Arthematic opreators
var a = 100;
var b = 10;
// console.log("The value of a+b is", a+b);
// console.log("The value of a+b is", a-b);
// console.log("The value of a+b is", a/b);
// console.log("The value of a+b is", a*b);

// Assignment Opreators
var c = b;
// c +=2;
// c -=2;
// c /=2;
// c*=2
// console.log(c);
// Comparison opreators 
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >=y);
// console.log(x <=y);
// console.log(x < y);

// Logical opreator
// Logical and &
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);

// Functon in javascript
function avg(a, b) {
  c = (a + b) / 2;
  return c;

}
// DRY = Do not repeat yourself 
// c1 = avg(4,6);
// c2 = avg(20,19);
// console.log(c1,c2);

// Conditionals in javascript
// var age = 41;
// Single statement 

// if (age > 18){
//   console.log('You can drink rasna water');
// }
// if else - statement
// if (age > 18){
//   console.log('You can drink rasna water');
// }
//   else{
//     console.log('you cannot drink rasna water');
// //   } 
// if(age > 32){
//   console.log('yu are not a kid');
// }
// else if (age > 26){
//   console.log('no kids here');
// }
// else if (age > 18){
//   console.log('18 no kids here');
// }
// else if (age > 22){
//   console.log('22 no kids here');
// }
// else{
//   console.log('bache rahe');
// }

// var age = 20;

// if (age > 18) {
//   console.log('you can play GTA V');
// }
// else if (age > 15) {
//   console.log('you can play game but according to your age!');
// }
// else {
  //   console.log('you are too young for these games.');
  // }

// var age = 20;

// if (age > 16){
  //   console.log('he is not gay')
  // }
  // else if (age < 15) {
    //   console.log('you are gay')
    // }
    // function avg(bmw,h2r){
// d = (bmw + h2r) /2;
// return d;
// }
//  b1 = avg(99,22);
//  b2 = avg(20,10);
// console.log('b1 ,b2')
// let j = 10;
var arr = [1, 2, 3, 4, 5, 6, 7];

// for(var i = 0;i<arr.length;i++){
//   if (i==2){
//     break;
//     // continue;
//   }
//   console.log(arr[i])
//   }

 
 // array.forEach(function(element){
  //   console.log(element);
  // })
  
  // const ac = 0;
  // ac++; 
  // ac = ac + 1;
  // while (j < array.length) {
    //   console.log(array[j]);
//   j++;
// }
// do{
//   console.log(array[j]);
//   j++;
// }
// while( j < array.length);

let myArr = ["fan", "Camera", 34, null, true];
// Arrys methods
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Hussain");