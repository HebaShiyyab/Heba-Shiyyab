// q1 Figure out the syntax errors in the following functions, and fix them.

/*const myFunction = function parameter) {} (practic)
const my Second Function = function (parameter) {} ()
const function = function (parameter) {} (function)
const functionName = function (paramOne paramTwo) {} (functionName)*/

// q2 Write a function sayHello that returns Hello when executed.
const sayHello = function () {
    // TODO: Your code here
    return  " Hello"
  };


// q3 Write a function myAge that accepts one argument age and returns the age when executed.

const myAge = function (age) {
 
    // TODO: Your code here
    return myAge 
  };
  


  //  q4 Write a function incrementOne that accepts one argument number and returns the number incremented by one when executed.

const incrementOne = function (number) {
    // TODO: Your code here
    
    return number +1 
  };
  

  // q5 Write a function greet that accepts one argument name and returns a string saying as shown below.

const greet = function (name) {
    // TODO: Your code here
    return " Hello" + "name"
  };
  

  //Practice

  //q1 Write a function double that accepts one argument number and returns the number doubled.

   const double = function (number) {
    // TODO: Your code here
    const number = number *2 
    return  number
  };
  


  // q2 Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined.

    const fullName = function (firstName, lastName) {
    // TODO: Your code here
    return "firstName " + " lastName"
  };
  


  // q3 Write a function average that accepts two number arguments and returns the average of these numbers.

   const average = function (a, b) {
    // TODO: Your code here
    const H = ( a  + b  ) / 2 
    return H 
  };
  

  // q4 Using the defined functions below and your average function try to guess the output of the following expressions without executing the functions.
  const square = function (number) {
    return number * number;
  };
  
  const cube = function (number) {
    return number * number * number;
  };
  
  /* guess the following before trying it in the console
  cube(25) + 20; // => 15645
  square(5) + cube(2); // => 633
  square(10 / 5) + cube(2 + 1); // => 31
  average(square(average(6, 2)), cube(4)); // => 40 */

  // q5 Write a function totalBill that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip.

  const totalBill = function (total, taxPercentage, tip) {
    // TODO: Your code here
    return total + (taxPercentage * total ) + tip
  };
 

  //q 6 Write a function ageInHours that accepts a number argument ageInYears and returns the age in hours (ignore leap years).

  const ageInHours = function (ageInYears) {
    // TODO: Your code here
    return ageInYears* 365 * 24
  };
  

  // q 7 Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.

  const calculateProfit = function (unitsSold, unitCost, unitPrice) {
    // TODO: Your code here
    return  unitsSold * unitPrice - unitCost * unitCost ; 
  };
  
 

  // q 8 Write a function floor that accepts one number argument, number and returns the number as an integer.
  const floor = function (number) {
    // TODO: Your code here
   return Math . floor(number);
}

//q9 Write a function toThePowerOf that accepts two number arguments, base and exponent, and returns the base to the exponent power.

const toThePowerOf = function (base, exponent) {
    // TODO: Your code here
    return Math.pow(base ,exponent)
  };


  // q10 Write a function upperCase that accepts a string argument string and returns the same string in upper case.

const upperCase = function (string){
      // TODO: Your code here
 return upperCase.toUpperCase ();

};


//Extra practice 
//q1 Write a function randomNumber that returns a random value between zero and one (includes 0 but not 1).
function randomNumber() {
    // TODO: Your code here
}
return Math.random()

  
  //q2 Write a function oneOrZero that uses randomNumber to return either the number zero or one.
 const oneOrZero = function (){
    return Math.random()
}


  //q3 Write a function randomRange that accepts a positive number and returns a random number between one and the passed in argument.

  const randomRange = function(number)
  {
  let b = Math.random() * number
   return Math.floor(b)
  }

  //q4 write a function fromTo that accepts two positive number arguments, start and end, returning a random number in between the start and the end value.
   const fromTo = function (start , end) {
       return Math.random()
   };

   //q5 write a function randomCharacter that accepts a string argument string and returns a random character from that string.
   const randomCharacter =(string){
       return Math.random()
   }
  
  
  





  


   
  






