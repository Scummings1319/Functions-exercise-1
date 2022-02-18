/*function greetClass(){
    console.log("Hello Class!!!!");
}

greetClass();*/

// function declaration
/*greetClass();
function greetClass(){
    console.log("Hello Class! Welcome back");
}
*/
//function expression

/*let greetclass= function(){
    console.log("hey everyone");
}
greetclass();
*/


//arrow function doesnt get hoisted (brought to top)
/*let greetclass = () => {
    console.log("hello everyone");

}
*/

// parameters

/*function greet(name) {
    console.log(`hey ${name}`);

}
greet("sam")
*/

function welcome ( first, last){
    console.log(`welcome ${first} ${last}.`)

}
welcome("Samantha", "Cummings")

//arrow function
/*function sum (number1, number2) {
    console.log(number1 + number2);
}
*/

/*let sum = (number1, number2) => {
    console.log(number1 +number2)

} 
*/
/*let sum = (number1, number2) => {
    console.log(number1 + number2)
}

sum(5,5)
*/


//rest parameters

/*function hi(first, last){
    console.log("hi "+first+" "+last+".");
}
hi("Samantha", "Cummings")
*/
//same thing as above but different styling
/*function hi(first, last){
    console.log(`Hi ${first} ${last}.`);
}
hi("Samantha", "Cummings")
*/

//arrays