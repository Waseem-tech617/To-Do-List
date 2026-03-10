// // Q1.Bmi Calculator.

// function bmi(weight,height){
//     return weight/(height*height);
// }
// console.log(bmi(35,1.5).toFixed(1));


// // Q2.Discount Calculator.

// function Discountcalculator(discount){
//     return function(value){
//         return value-value*(discount/100);
//     }

// }
// let ten=Discountcalculator(10);
// console.log(ten(1200));
// console.log(ten(200));


// // Q3.Create a function of Adding tow numbers.

//  function add(a,b){
//     return a+b;
//  }
// console.log(add(12,24));


// // // Q4.Create a function of square of  number.

//  function add(a){
//     return a*a;
//  }
// console.log(add(5));


// // Q5.Create a function of checking the number odd or event.

// let checking=(num)=>{
//  if(num%2===0){ 
//     console.log(`${num} is even`);
// }else{
//     console.log(`${num} is odd`);
// }

// }
// checking(10);


// // Q6.Create a function convert string into uppercase.

// function upercase(str){
// let upper=str.toUpperCase();
// console.log(upper);
// }
// upercase("waseem");


// // Q7.Create a function of string and reverse it.


// function reverse(str){
//   let nstr=str.split("").reverse().join("");
// console.log(nstr);



// }
// reverse("waseem");


// // Q8.Create a function it checks string plaindrome.

// let plaindrome=function(str){
// let nstr=str.split("").reverse().join("");
// if(nstr===str){
//   console.log(`${str} is pliandrome`);
// }else{
//   console.log(`${str} is not plaindrome`)
// }
// }
// plaindrome("civic");



// // Q9.Create a function to  check num prime or Not.

// function prime(num){
//   for(let i=2;i<num;i++)
//   if(num%i==0){
//     return "num is  not prime";
//   }else{
//     return "num is prime";
//   }
   
//   }
// console.log(prime(10));



// // Q10.Create a function to check a greater num.

// function largernumber(num1,num2){
//     if(num1>num2) return "num1 is greater ";
//     else          return "num2 is greater ";
    
// }
// console.log(largernumber(144,23));


// // Q11.Create a function and print a table.

// function table(num){
//   for(let i=1;i<=10;i++){
//    console.log(`${num} X ${i} = ${num*i}`);
//   }
// }
// table(5);


// // // Q12.Create a function to claculate a perfact  Number.

// function factor(num){
//     let sum=0;
//     for(let i=1;i<num;i++){
//         if(num%i===0){
//             sum+=i;
        
//         }}
//             if(sum===num){
//                 console.log("perpect num");

//             }else{
//                 console.log("not perfect num");
//             }
        
//         }
// factor(11);
// factor(25);
// factor(6);


// Q13.Create a function to reverse a Number.

// function reverse(num=133){
//     let nnum=num.toString();
//     let str=nnum.split("").reverse().join("");
//     console.log( parseInt(str));

// }
// reverse(12345);
// reverse();


// // Q14.create a arrow function and count a word in sentence.

// let word=(sentence) => {
//    let count=0;
//    let news=sentence.split(" ");
//    let ns="";
//    for(let i=0;i<=news.length-1;i++){
//     ns+=news[i];
//     count++;
//    }
// return count;
// }
// console.log(word("waseem ads ahst ajsya ashyds"));
// console.log(word("waseem ads ahst ajs"));



// // Q15.find the average of numbers .

// function average(...val){
// let sum=0;
// for(let i=0;i<=val.length-1;i++){
//   sum=sum+val[i];
// }
//   let averag=sum/val.length;
// console.log(averag);
// }
// average(1,2,3,4,5,6,7);
// average(25,32,43,65,765);


// // Q16.create a IFFI function.

// (function abcd(){
//     console.log("hi!");
// })();



// // // Q17.create a IFFI function and multiply tow numbers.


// (function abcd(a,b){
//     console.log(a*b);
// })(1,3);


// // Q18.create a function of dobel the number.

// let dobel=function(num){
//     return num+num;

// }
// console.log(dobel(88));


// // Q19.Create a function convert string into uppercase.

// function uppercase(str){
//  return str.toUpperCase();
// }
// function printstring(fn,value){
//     console.log(fn(value));
// }
// printstring(uppercase,"sdsfs");



// // Q20.Create a first class function.

// function execute(fn){
//     fn();
// }
// function massage(){
//     console.log("waseem");
// }

// function greet(){
//     console.log("hello user ");
// }
// execute(massage);
// execute(greet);


// // Q21.Create a first class function .

// function seyhello(name){
//     return "Hello " +name;
// }
// function greet(fn){
//     return fn("Ali");
// }
// console.log(greet(seyhello));


// // Q22.Create a first class function who return a function.

// function multyplyby(num1){
//     return function(num2){
//         return num1*num2;
//     }
// }
// console.log(multyplyby(2)(5));


// // // Q23.Create a first class function to find double  number and square.

// function dobel(num){
//     return num*2;
// }
// function square(num){
//     return num*num;
// }
// function main(fn,value){
//     return fn(value);
// }
// console.log(main(dobel,6));
// console.log(main(square,8));




// // // Q24.Create a HOF  function .

// function multiplyer(num1){
//     return function(num2){
//         return num1*num2;
//     }
// }
// let doble=multiplyer(2);
// let triple=multiplyer(3);
// let square=multiplyer(4);
// let cube=multiplyer(8);
// console.log(doble(10),triple(10),square(4),cube(3));


// // Q25.Create a HOF  function .

// function sqare(num) {return num*num;}
//  function doble(num) {return num*2;} 
//  function applyoperation(value,fn) {
//     return fn(value);
//  }
// console.log(applyoperation(3,sqare));
// console.log(applyoperation(3,sqare));
// console.log(applyoperation(3,doble));



// // // Q26.Create a HOF  function of calculatediscount .

// function calculatediscount(percent){
//     return function(price){
//         return   price-(price*percent/100);
//     }
// }
// let ten=calculatediscount(10);

// let towenty=calculatediscount(20);
// console.log(ten(1000),towenty(1000));



// //  Q27.Create a HOF  function .

// function logingin(fn){
//     return function(a,b){
//         console.log(a,b);
//         let result=fn(a,b);
//         console.log(result);
//         return result;
//     }
// }
// function add(x,y) {return x+y;}
// let loggedadd=logingin(add);
// console.log(loggedadd(2,5));


// // //  Q28.Create a HOF  function .

// function repeet(fn){
// return function(num){
//     for(let i=1;i<=num;i++){
//       console.log(`Call ${i} :`);
//        return fn();
//     }
// }}
// function sayhello(){
//     console.log("waseem");
// }
// let sec=repeet(sayhello);
// sec(3);


// // Q29.Create a function factory.
// function powerof(num1){
//     return function(num2){
//         return num2**num1;
//     }
// }
// let square=powerof(2);
// let cube =powerof(3);
// console.log(square(5));
// console.log(cube(2));


// // Q30.Create a hof function .

// function withmasseg(fn){
//     return function(name){
//        console.log("function is about to run");
//        return fn(name+"!");
//     }
// }
// function greet(name){
//     return "Hello "+name;
// }
//    let warap= withmasseg(greet);
// console.log(warap("waseem"));
// console.log(warap("agsg"));


// // Q31.Create a hof function.

// function repeataction(fn,num){
//         for(let i=0;i<=num;i++){
//         fn();
//         }
//     }
// function mass(){
//     console.log("ali");}

// repeataction(mass,6);


// // Q32. WithLogging
// // Ek HOF withLogging banao jo ek function ko input me le.
// // Jab bhi wo function chale to:

// // Call ke arguments print karo
// // Function run karo
// // Result bhi print karo
// // Aur result return karo

// function withloggin(fn){
//    return function(x,y){
//     console.log("caling with arguments",x,y);
//     result=fn(x,y);
//     console.log("result is ",result);
//     return result;
//    }
// }
// function add(a,b){
//     return a+b;
// }
// let res=withloggin(add);
// console.log(res(2,3));


// // // Q33.Create a Hof function .
// function runif(fn){
// return function(condition){
//     if(condition===true){
//       console.log(fn());
//     }
// }
// }
// function greet(){
//     return "hello";
// }
// let runer=runif(greet);
// let skip=runif(greet);
// runer(true);
// runer(false);


// // Q34.Creat a callback function .

// function runcallback(callback,x,y){
//    callback(x,y);
// }
// function add(x,y){
// console.log(x+y);
// }
// function multiply(x,y){
// console.log(x*y);
// }
// runcallback(add,2,3);
// runcallback(multiply,2,3);


// // Q35.Create a clouser function .

// function outer() {
//     let count = 0;  // outer ka variable

//     function inner() {
//         count++;  
//         return count;
//     }

//     return inner;
// }

// let counter = outer();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// // Q36.Ek function getEvenNumbers(arr) banao jo ek numbers array lega aur sirf even numbers return kare.
// function getEvenNumbers(arr){
//     let even=[];
//      for(let i of arr){
//         if(i%2==0){
//         even.push(i);
//         }
//      }
//      return even;
//     }
// console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));


// // Q37.Ek function getMax(arr) banao jo ek numbers array lega aur uska maximum number return kare.
// function maximumnumber(arr){
// return Math.max(...arr);
// }
// console.log(maximumnumber([9,4,3,2,6]));


// // // Q38.Ek function getNames(arr) banao jo ek objects array lega (har object me {id, name} ho) aur sirf names ka array return kare.
// function obj(arr){
//    let getNames=arr.map((n)=> n.name);
//    return getNames;
// }
// console.log(obj([{id:1,name:"waseem"},{id:2,name:"saleem"}]));



// // Q39.Ek function applyOperation(a, b, operation) banao jo 2 numbers aur ek callback function lega (jaise add, subtract, multiply). Operation ke hisaab se result return kare.
// function applyOperation(a,b,operation){
//  return operation(a,b);
// }
// function add(a,b){
//    return a+b;
// };
// console.log(applyOperation(2,6,add));


// //Q40. Ek function wordLengths(words) banao jo ek array of strings lega aur har word ka length ka array return kare.
//  function countwordlength(arr){
// return arr.map(word=>word.length);
//  }
// console.log(countwordlength( ["apple","banana","kiwi"] ));



// //Q41.Ek students array hai {name, marks}. every() use karke check karo ke sab students ke marks 40 se zyada hain ya nahi.
// let students=[
//     {Name:"waseem",marks:78},
//     {Name:"saleem",marks:67},
//     {Name:"ali",marks:89}
// ];
// let isabove40=students.every((stu)=>{
//     return stu.marks>40;
// });
// console.log(isabove40);


// // Q42.Ek products array hai {name, stock}. some() use karke check karo ke koi product out of stock (stock = 0) to nahi hai.
// let products = [
//     {
//         id: 1,
//         name: "Shoes",
//         price: 2000,
//         stock: 10,
//         category: "Footwear",
//         available: true
//     },
//     {
//         id: 2,
//         name: "Shirt",
//         price: 1200,
//         stock: 15,
//         category: "Clothing",
//         available: true
//     },
//     {
//         id: 3,
//         name: "Watch",
//         price: 5000,
//         stock: 0,
//         category: "Accessories",
//         available: true
//     }
// ];
// let checkstock=products.some((stk)=>stk.stock===0);
// console.log(checkstock);