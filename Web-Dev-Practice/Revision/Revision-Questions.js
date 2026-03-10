// // 1️⃣ Reverse Vowels in a string "javascript".

// let str="javascript";
// let rev="";
// for(let i=0;i<=str.length-1;i++){
//     if(str[i]==="a" || str[i]==="i"){
// rev=str[i]+rev;
//     }
// }
// let nstr="";

// for(let i=0, index=0;i<=str.length-1;i++){
//     if("ai".includes(str[i])){
//         nstr+=rev[index];
//         index++;
//     }
//     else{
//         nstr+=str[i];
//     }
// }
// console.log(nstr);


// // 2️⃣ Count Words That Start and End with Same Letter.

// let sentence="Anna and Bob are amazing";
// let words=sentence.split(" ");
// let count=0;
// for(let i=0;i<=words.length-1;i++){
//     let word=words[i];
//     let first=word[0].toLowerCase();
//     let second=word[word.length-1].toLowerCase();
//     if(first===second){
//         count++;
//     }
// }
// console.log(count);


// // 4️⃣ Password Strength Checker.

// let uper=false;
// let lower=false;
// let digit=false;ssss
// let special=false;

//  let password=prompt("Enter a pasword: folow these at least 1 uppercase, 1 lowercase, 1 digit, aur 1 special character ");
//  for(let i=0;i<=password.length-1;i++){
//     if(password[i]===password[i].toLowerCase() && isNaN(password[i] )){
//         lower=true;}
//         else if(password[i]===password[i].toUpperCase() && isNaN(password[i])){
//             uper=true;
//         }else if(!isNaN(password[i])){
//             digit=true;
//         }
//         else if("!@#$%^&*".includes(password[i])){
//             special=true;
//         }
//     }
    
    
//     if(uper && lower&& digit&& special){
//         console.log("strong password");
//     }else{
//         console.log("weakpassword");
//     }



// // Q5. Checking Username.

// let special=false;
// let user=prompt("Enter a Name ,only enter alphabets and numbers not allowed special characters or minimum length 5");
// if(user.length>=5){
// for(let i=0;i<=user.length-1;i++){
//     if("!@#$%^&*".includes(user[i])){
//        special=true;
//     }
// }}else{
//     console.log("enter minuimum 5 characters");
    
// }

// if(user.length>=5){
// if(special){
//     console.log("invalid name");

// }else{
//     console.log("valid name");
// }}



// Q6.count nsum of numbers in String.

// let str="wdasg2365 gs";
// sum=0;
// for(let i=0;i<=str.length-1;i++){
//     if(!isNaN(str[i])){
     
//     sum=sum+Number(str[i]);
//     }
// }console.log(sum);

// // Q7.reverse string words remain in same order .

// let str="hello world";
// let strn=str.split(" ");
// let Reverses="";


// for(let i=0;i<=strn.length-1;i++){
//    let  Reverse=strn[i].split("").reverse().join("");
// Reverses+=Reverse +" ";
// }
//     console.log(Reverses);



// // Q7.remove repition or Characters.


// let str="banabana";
// let nstr="";

// for(let i=0;i<=str.length-1;i++){
//     if(!nstr.includes(str[i])) {
//         nstr+=str[i];
//     }
// }
// console.log(nstr);


// // Q8.count vovuls.

// let strn="wAAAAAAAAsemhdirhcm";
// let str=strn.toLowerCase();
// let count=0;
// for(let i=0;i<=str.length;i++){
//  if(str[i]==="a" || str[i]==="e"|| str[i]==="i" ||str[i]==="o" ||str[i]==="u"){
//     count++;
//  }}
//  if(count>5){
//     console.log("Many vovles");
//  }
//  else{
//     console.log("few vovels");
//  }
 

// // Q9.convert string reverse.

// let str= "I love JavaScript";
// let nstr=str.split(" ");
// let reverse="";
// for(let i=nstr.length-1;i>=0;i--){

// reverse+=nstr[i]+" ";
// }
// console.log(reverse);


// // Q10.remove numbers and special symbol from string "JavaScript123!".

// let str = "JavaScript123!";
// let rem="";
// for(let i=0;i<=str.length-1;i++){
//     if(!isNaN(str[i]) || "!@#$%^&*".includes(str[i])){
//         continue;
//     }else{
//         rem+=str[i];
//     }
// }
// console.log(rem);



// // Q11.print diamond partren.
 
// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=1;j<=5-i;j++){
//         row+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         row+="*";
//     }
    
//     console.log(row)
// }

// ✅ Question 1:
// Check a number and print:

// “Positive” if > 0

// “Negative” if < 0

// “Zero” if 

// let num=Number(prompt("enter a num"));
// if(num>0){
//     console.log(`${num} is positive`); 
// }else if(num<0){
//     console.log(`${num} is negitive`);
// }else if(num===0){
//     console.log(`${num} is zero`);
// }else{
//     console.log(`${num} it is not a number `);
// }
// // ✅ Question 2 : With ternary operater.
// // Check a number and print:

// // “Positive” if > 0

// // “Negative” if < 0

// // “Zero” if 

// let num=Number(prompt("enter a num"));
// let result=num>0?`${num} is positive`:num<0?`${num} is negitive`:num===0?`${num} is zero`:NaN;
// console.log(result);

// // 🔹 Question 3: Day Name

// // Ek number (1–7) lo aur switch se print karo:

// // 1 → Monday

// // 2 → Tuesday

// // 3 → Wednesday

// // 4 → Thursday

// // 5 → Friday

// // 6 → Saturday

// // 7 → Sunday

// // Default → “Invalid day”

// // let day="saturday";
// // switch(day){
// //     case "Monday":
// //         console.log("Monday"); 
// //         break;
// //         case "saturday":
// //             console.log("saturday");
// //             break;
// //             default:
// //                 console.log("not a day");
// // }



// // 🔹 Question 4: Traffic Light

// // Ek color input lo:

// // "red" → Stop

// // "yellow" → Ready

// // "green" → Go

// // Default → Invalid color

// let color=prompt("enter a color");
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//         case "yellow":
//             console.log("ready");
//             break;
//             case "green":
//                 console.log("go");
//                 break;
//                 default:
//                     console.log("invalid color");
// }