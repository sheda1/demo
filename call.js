/*
//Write a function and use 'call' to call the function
var obj = {num : 2};
var addToThis = function(a)
{
    return this.num + a;
};
console.log(addToThis.call(obj,3));
*/
/*
//Write a program using apply
var obj = {num : 2};
var addToThis = function(a,b,c)
{
    return this.num + a +b+c;
};
var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));
*/
/*
//Write a program using bind
var obj = {num : 2};
var obj2 = {num : 5};
var addToThis = function(a,b,c)
{
    return this.num + a +b+c;
};
var arr = [1,2,3];
var bound  =addToThis.bind(obj);
console.dir(bound);
*/
/*
//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
var student = {age : 20};
var studentage = function(){
    return this.age;
};
studentage.call(student);
var bound = studentage.bind(student);
console.log(bound());

*/
//function curry

//let mutiply = function(x,y){
  //  console.log(x*y);
//}
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multipltyBytwo =  multiply(2);
multipltyBytwo(5);

let multipltyBythree = multiply(3);
multipltyBythree(5);