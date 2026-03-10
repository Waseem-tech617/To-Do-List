//                         //    for loop practice qestions.


// // ✅ Q1.Reverse a string using a loop.

// let a = "apple";
// let b = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   b = b + a[i];
// }
// console.log(b);


// //✅ Q2. Ek string hai "banana". Tumne usme sirf "a" count karna h

// let str="banana";
// let count=0;
// for(let i=0;i<=str.length;i++){

//     if(str[i]==="a"){
//         count++;
//     }
// }
//  console.log(count);


// // ✅ Q3. Print each letter of "JavaScript" on a new line using a loop.

// let str="Javascript";

// for(let i=0;i<str.length;i++){
// console.log(str[i]);

// }


// // ✅ Q4.Ek string "racecar" hai. Check karo kya ye palindrome hai ya nahi.

// let a="racecar";
// let b="";
// for(let i=0;i<a.length;i++){
//     b =a[i]+b;
// }
//     if(a===b){
//         console.log("youer string is palindrome  ");
//     }
//     else{
//         console.log("not a plandrome");
//     }


// // ✅ Q5. Print each word of "hello world" in a new line.

// let str="hello world";
// let words=str.split(" ");
// for(let i=0;i<str.length;i++){
//     console.log(words[i]);
// }


// // ✅ Q6.Ek string hai "apple mango banana". Tumne last word print karna hai.

// let str="apple mango banana";
// let words=str.split(" ");

//  console.log(words[2]);



// // ✅ Q7. Print characters of this string in reverse but only vowels "javscript".

// let str="javascript"
// for(let i=str.length;i>0;i--){
//     let reverse=str[i];
//     if(reverse=== "a" || 
//    reverse=== "e" || 
//    reverse=== "i" ||
//    reverse=== "o" || 
//    reverse=== "u" )
//    {
//  console.log(reverse); 
// } 
// }


// // // ✅ Q8.is number ma ko reverse karo.

//    let num=12345;
//    let str=num.toString();
//    let reverse="";
   
//    for(let i=0;i<str.length;i++){
//     reverse=str[i]+reverse;
//    }
//    console.log( Number(reverse));


// // // ✅ Q9. Is string ma sa spaces ko count karo.

//    let str="loops are fun to practice";
//    let count=0;
//    for(let i=0;i<=str.length;i++){
   
//    if(str[i]===" "){
//     count++;
//    }
//    }
//     console.log(count);


// // ✅ Q10.Count the each string word "javascript".

// let str="javascript";
// let count={};
// for(let i=0;i<str.length;i++){
//   let char=str[i];
//   if(count[char]){
//     count[char]++;
//   }else {
//     count[char] = 1;
//   }
// }
// console.log(count);

// // // ✅ Q11.print a srting in same order.

// let str="hello world";
// let nstr=str.split(" ");
// let newv=[];
// for(let i=0;i<nstr.length;i++){
    
//      let word=nstr[i];

//      let newvr="";
//      for(let j=word.length-1;j>=0;j--){
//         newvr+=word[j];
//      }
//     newv.push(newvr);
// }
// let reverse=newv.join(" ");
// console.log(reverse );


//                          // nested loop Practice questions.

// //  ✅ Q1.Increasing Number Patren.

// let count=1;
// for(let i=1;i<=5;i++){
//      let square="";
// for(let j=1;j<=i;j++){
//    square=square+count;
//    count++;
// }
// console.log(square);
// }


// // ✅ Q2. Number Patren.

// for(let i=5;i>=0;i--){
//     let num="";
// for(let j=1;j<=5;j++){
//  num=num+j;

// }
//  console.log(num);
// }


// // ✅ Q3. left align triangle star print.

// for(let i=1;i<=5;i++){
//     let num="";
//     for(let j=1;j<=5-i;j++){
//     num=num+" ";
// }
//          for(let k=1;k<=i;k++){
//     num=num+"*";
// }

//    console.log(num);
// } 


// //  ✅ Q4.Hollow Tiangle Print.

// for(let i=1;i<=5;i++){
//     num="";
//    for(let j=1;j<=i;j++){
//     if(j==1 || j==i || i==5){
//         num+="*";
//     }else{
//         num+=" ";
//     }
//    }
// console.log(num);
// }


// //  ✅ Q5. Pyramid Patren Print.

// for(let i=1;i<=5;i++){
//     num="";
//     for(let j=1;j<=5-i;j++){
//         num=num+" ";
//     }
    
//     for(let l=1;l<=i;l++){
//         num=num+"*";
//     }
//  for(let k=2;k<=i;k++){
//         num=num+"*";
//     }


//     console.log(num);
// }



// // //  ✅ Q5. Inverted Pyramid Patren Print.

// for(let i=5;i>=1;i--){
//     num="";
//     for(let j=1;j<=5-i;j++){
//         num=num+" ";
//     }
    
//     for(let l=1;l<=i;l++){
//         num=num+"*";
//     }
//  for(let k=2;k<=i;k++){
//         num=num+"*";
//     }


//     console.log(num);
// }


// // ✅ Q6. X shape Patren Print.

// for (let i = 1; i <= 7; i++) {
//     let line = "";
//     for (let j = 1; j <= 7; j++) {
//         if (i === j || i + j === 8) {
//             line += "*";
//         } else {
//             line += " ";
//         }
//     }
//     console.log(line);
// }

// // ✅ Q6.Diamond Patren Print.

// for(let i=1;i<=5;i++){
//         row="";
//         for(let j=4;j>=i;j--){
//                 row+=" ";
//             }
//              for(let k=1;k<=i*2-1;k++){
//                     row+="*";
//                 }
            
//                     console.log(row);
//                 }
            
//              for(let i=1;i<=4;i++){
//                     row="";
                
//                     for(let j=1;j<=i;j++){
//                             row+=" ";
//                         }
//                          for(let k=1;k<=(2*(5-i)-1);k++){
                    
//                            row+="*";                       
//                                 }
//       console.log(row);
//     }
   


// // ✅ Q7.Number Diamond Holow Patren Print.

// for(let i=1;i<=5;i++){
//     row="";
//     for(let j=4;j>=i;j--){
//         row+=" ";
//     }
//     for(let k=1;k<=i*2-1;k++){
//         if(k==1){
//             row+="1";
//         }else if(k===i*2-1){
//             row+=i;
//         }else{
//             row+=" ";
//         }
            
//         }
//         console.log(row);
//     }
   
// for(let i=1;i<=4;i++){
//     row="";
//     for(let j=1;j<=i;j++){
//         row+=" ";
//     }
//     for(let k=1;k<=2*(5-i)-1;k++){
//           if(k==1){
//             row+="1";
//         }else if(k===2*(5-i)-1){
//             row+=(5-i);
//         }else{
//             row+=" ";
//         }
            
//         }
   
//     console.log(row);
// }


// // ✅ Q8. Hollow Hourglass Number Pattern

// for(let i=1;i<=5;i++){
//     row="";
//     for(let j=2;j<=i;j++){
//         row+=" ";
//     }
//     for(let l=1;l<=2*(6-i)-1;l++){
//         if(l===1){
//             row+=1;
//         }else if(l===2*(6-i)-1){
//             row+=(6-i);
//         }else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }

// for(let i=1;i<=4;i++){
//     row="";
//     for(let j=3;j>=i;j--){
//         row+=" ";
//     }
//     for(let l=1;l<=i*2+1;l++){
//         if(l===1 ){
//             row+=1;
//         }
//         else if(l===2*i+1){
//             row+=(i+1);
//         }
//         else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }



// // ✅ Q9. Symmetric Number Pyramid with Spaced Center Digits.


// let n=5;
// for(let i=1;i<=n;i++){
//     row="";
    
//     for(let j=1;j<=2*(n-i);j++){
//         row+=" ";
//     }

    
//     row+=1;
//  if(i===1){
//          for(let s=1;s<=7;s++){
//         row+=" ";
//     }
//     row+=1;
//  }
//    if(i===2){
//     row+="   "+i+"   "+i+"   "+1;
//    }else if(i>2){
//     for(let k=1;k<=2*i+1;k++){
//         row+=" ";
//     }
//     row+=i;
//    }
//    if(i>2){
//    for(let l=1;l<=2*i+1;l++){
//         row+=" ";
//     }
//     row+=1;
// }
    
//    console.log(row)

//     }

// // ✅ Q10.Holow diamond patren.
  
// let n=prompt("enter a num");

// for(let i=1;i<=n;i++){
//     row="";
//     for(let j=1;j<=i;j++){
//    row+=j;
//     }
//     for(let k=1;k<=2*(n-i)-1;k++){
//         row+=" ";
//     }
//      for(let l=i;l>=1;l--){
//    if(l===n){
//     l-1;
//    }else{
//         row+=l;}


 
//     }
//     console.log(row);
// }