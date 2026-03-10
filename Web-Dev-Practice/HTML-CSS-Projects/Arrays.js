// // Q1. Create a filter method of arrays.

// arr=[3,4,5,6,78];
// let newarr=arr.filter(function(val){
//     if(val>4) return true;
// });
// console.log(newarr);


// // Q2.Create an array of  three fruits anfd print second one.

// let arr=["mango","apple","banana"];
// let narr=arr.slice(1,2);
// console.log(narr);


// // Q3.Add "mango" at the end of the array and "pineapple" beggining of an array.

// let arr=["mango","apple","banana"];
// arr.unshift("mangosq");
// arr.push("pineapple");


// console.log(arr,arr);


// // Q4.Create an array and replace "banana" with "apple".

// let arr=["mango","apple","banana"];
// arr.pop();
// arr.push("apple");

// console.log(arr);


// // Q5.Create an array and radd "banana" and"apple" in given array.

// let arr=["mango","apple","banana"];
// arr.splice(1,1,"waseem","eads");
// console.log(arr);


// // Q6.Get an middel elements in an given array.

// let arr=["gcfgc","mango","apple","banana","fvhyv"];
// let narr=arr.slice(1,3);
// console.log(narr);



// // Q7.Use map method to square the given Array.

// let num=[1,2,3,4,5];
// let nnum=num.map(function(val){
//     return val*val;
// });
// console.log(nnum);


// //  Q8.Use filter method to keep numbers greater then 10.

// let num=[12,12,435,564];
// let narr=num.filter((val)=>{
//     return val>30;
// });
// console.log(narr);


// // Q9.use find method t find first greater number  then 12;

// let num=[12,12,435,564];
// let numa=num.find((val)=>{
//     return val>12;
// });
// console.log(numa);


// // // Q10.use some method t find first less number  then 85;

// let num=[12,42,52];
// let numa=num.some((val)=>{
//    return val<85;
// });
// console.log(numa);


// // Q11.destructure the arry.

// let arr=["waseem","afagf","ahsh","ahsb"];
// let [a,,,b]=arr;
// console.log(arr);


// // Q12.Create an array and multyply by 2.

// let num=[45, 50, 60, 70];
// for(let nums of num){
//     console.log(nums*2);
// }


// // Q13."banana" ko is array se remove karo.

// let fruits = ["apple", "banana", "mango", "orange"];
// fruits.splice(1,1).shift();
// console.log(fruits);


// // Q14.Check karo "Ahmed" array me maujood hai ya nahi (true/false print karo).

// let names = ["Ali", "Sara", "Ahmed", "Hina"];
// let name=names.some((val)=>{
//     return val==="Ahmed";
// });
// console.log(name);


// // Q15.isme se sirf even numbers print karo.

// let numbers = [5, 10, 15, 20, 25];
// for(let num of numbers){
//     if(num%2==0){
//         console.log(`${num} is even`);
//     }
// }


// // Q16.inko ek sentence me join karke print karo.

// let words = ["I", "love", "JavaScript"];
// let nword=words.join(" ");
// console.log(nword);


// // Q17.is array ke sabhi elements ka sum nikaalo.

// let numbers = [2, 4, 6, 8, 10];
// let num=0;
// for(num of numbers){
//    num+=num;
// }
// console.log(num);


// // Q18.is array me "apple" kitni dafa aata hai, count karo.

// let fruits = ["apple", "mango", "orange", "apple", "banana"];
// let count=0;
// for(fru of fruits){
//     if(fru==="apple"){
//         count++;
//     }
// }
// console.log(count);


// // Q19.is array me sirf numbers print karo.

// let mix = [10, "Ali", true, 45, "Sara", false];
// for(num of mix){
//     if(typeof num==="number"){
//         console.log(num);
//     }
// }


// //Q20. is array ka sabse bara number find karo.

// let marks = [90, 45, 76, 88, 100];
// let max=marks[1];
// for(let num of marks){
//     if(num>=max){
//         max=num;
//     }
// }
// console.log(max);


// // Q21.is array ko reverse karke ek sentence print karo.

// let words = ["JavaScript", "is", "awesome"];
// let a=words.reverse().join(" ");
// console.log(a);


// // Q22.   Isme se sirf odd numbers nikaal ke ek new array banao.

// let numbers = [1, 2, 3, 4, 5, 6];
// let newarray=numbers.filter((val)=>{
//     return val%2!==0;
// });
// console.log(newarray);


// // Q23.Isme se sirf 15 ka index number print karo.

// let nums = [5, 10, 15, 20, 25];

// for(let i in nums){
//     if(nums[i]===15){
//        console.log(i) ;
//     }
// }


// // Q24. Is array ka reverse manually karo (bina .reverse() method use kiye.

// let nums = [1, 2, 3, 4, 5];
// let nnums=[];
// for(let i of nums){
//     nnums.unshift(i);
// }
// console.log(nnums);


// // Q25.Is array ka 2nd largest number find karo.
                          
// let arr = [1, 2, 4, 3, 5];
// arr.sort((a,b)=>a-b);
// console.log(arr[arr.length-3]); // 4


// // Q26.Is array ma sa third large value nikalo.

// let arr = [2,3, 4, 5,2,3,5,7,8,9,56,7];
// let largernumber=-Infinity;
// let secondlast=-Infinity;
// let third=-Infinity;
// for(let i of arr){
//     if(i>largernumber){
//        third=secondlast;
//         secondlast=largernumber;
//         largernumber=i;
//     }
//    else if(i>secondlast &&i<largernumber){
//     third=secondlast;
//     secondlast=i;
//    }
// }
// console.log(third);


// // // Q27.Isme se smallest number aur second smallest number find karo.

// let arr = [15, 7, 22, 11];
// let smallest=Infinity;
// let secondsmallest=Infinity;
// for(let i of arr){
//     if(i<smallest){
//         secondsmallest=smallest;
//         smallest=i;
//     }
//  else if (i < secondsmallest && i!==smallest ) {
        
//         secondsmallest = i;

//     }}
// console.log(secondsmallest);


// // Q28.User se ek number input lo (maan lo 15) aur check karo ki ye array me hai ya nahi. (Linear Search use karke).

// let arr = [4, 8, 15, 16, 23, 42];
// let user=prompt("enter a number");
// let found=false;
// for(let i of arr){
//     if(Number(user)===i){
//        found=true;
//        break;
//     }
// }
// if(found){
//     console.log("yes here");
// }else{
//     console.log("not value");
// }


// // Q29.Duplicate numbers ko remove karke unique array banao.

// let arr = [3, 6, 2, 8, 4, 6, 2];
// let narr=[];
// for(let i of arr){
//   if(narr.includes(i)){
//      continue;
//   }else{
//     narr.push(i);
//   }

// }
// console.log(narr);


// // Q30.Har element ka cumulative sum nikal ke naya array banao.
// let arr = [10, 20, 30, 40, 50];
// let narr=[];
// let sum=0;
// for(let i of arr){
//     sum+=i;
//     narr.push(sum);
// }
// console.log(narr);


// // Q31.Array ka second smallest number find karo.
// let arr = [7, 2, 5, 3, 9, 1];
// let smallest=Infinity;
// let secondsmallest=Infinity;
// for(let i of arr){
//     if(i<smallest){
//         secondsmallest=smallest;
//         smallest=i;
//     }  else if(i>smallest && i!==smallest){
//         secondSmallest=i;
//     }
// }
// console.log(secondsmallest);


// // Q32.User se ek number input lo aur uska index batao (agar number na ho to -1).
// let arr = [4, 8, 15, 16, 23, 42];
// let user=prompt("enter a number");
// let index=-1;
// for(let i=0;i<=arr.length;i++){
//     if(Number(user)===arr[i]){
//      index=i;
//     }

// }
// console.log(index);


// // Q33.Odd numbers ka sum aur even numbers ka sum alag-alag print karo.
// let arr = [1, 2, 3, 4, 5, 6];
// let oddsum = 0;
// let evensum = 0;
// for (let i of arr) {
//     if (i % 2 == 0) {
//         evensum += i;   
//     } else {
//         oddsum += i;    
//     }
// }
// console.log("Odd Sum =", oddsum);
// console.log("Even Sum =", evensum);


// // Q34.Negative numbers ko alag array me aur positive numbers ko alag array me daalo.
// let arr = [2, 3, -1, -4, 6, -2];
// let positive=[];
// let negitive=[];
// for(let i of arr){
//     if(i<0){
//         negitive.push(i);
//     }else{
//         positive.push(i)
//     }
// }
// console.log(negitive);
// console.log(positive);


// //Q35.  Sirf woh numbers print karo jo sirf ek hi dafa aaye hain (unique frequency wale).
// let arr = [5, 3, 8, 5, 2, 8, 1, 3];
// let unique=[];
// for(let i of arr){
//    if(arr.indexOf(i)===arr.lastIndexOf(i)){
//     unique.push(i);
//    }
  

// }
// console.log(unique);


// //Q36.  Output aisa banao ke number + uski frequency dikhe.
// let arr = [1, 2, 2, 3, 4, 4, 4, 5];
// for(let i=0;i<=arr.length;i++){
//     Count=0;
//     for(let j=0;j<=arr.length;j++){
//         if(arr[i]===arr[j]){
//             Count++;
//         }
//     }
//     console.log(arr[i],"=",Count);
    
// }

// // Q37. Sirf woh numbers nikaalo jo 5 se divisible hain.
// let arr = [10, 15, 20, 25, 30];
// let number=arr.filter((val)=>{
//     return val%5==0;
// });
// console.log(number);


// // // Q38. Ek aur array banao jisme har index par us index ke alawa baaki sab elements ka product ho .
// let arr = [1, 2, 0, 4, 2];
// let narr=[];
// for(let i=0;i<arr.length;i++){
//         let mul=1;
//        for(let j=0;j<arr.length;j++){
//         if(i===j){
//             continue;
//         }
//          mul=mul*arr[j];
//        }
       
//        narr.push(mul);
//     }
//      console.log(narr);


// //  Q39. Ek aur array banao jisme har index par us index ke alawa baaki sab elements ka product ho 0 wala case.
// let arr = [1, 2, 2,1 , 2];
// let narr=[];
// let total=1;
// let zerocount=0;
// for(let i of arr){
//     if(i===0){
//         zerocount++;
//     }else{
//         total*=i;
//     }
// }
// for(let i of arr){
//     if(zerocount>1){
//         narr.push(0);
//     }else if(zerocount===1){
//         if(i===0){
//             narr.push(total);
//         }else{
//             narr.push(0);
//         }
//     }
//     else{
//         narr.push(total/i);
//     }
// }
// console.log(narr);


// // Q40.Check karo ye array palindrome hai ya nahi.
// let arr = [1, 2, 3, 2, 1];
// let narr=arr.reverse();
// if(narr===arr) {
//     console.log("yes");
// }else{
//     console.log("not");
// }


// // Q41.Sare zeros ko end me le jao (without new array).
//  let arr = [1, 0, 2, 0, 3, 0, 4];
//  let count=0;
//  for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr[count]=arr[i];
//         count++;
//     }
//  }
//  while(count<arr.length){
//         arr[count]=0;
//         count++;
//     }
//  console.log(arr);


// // Q42.Sabse zyada baar repeat hone wala number print karo.
// let arr = [1, 2, 3, 2, 1, 4, 5, 1];
// let maxinum=-Infinity;
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count++;
//         }      
//     }
//    if(count>maxinum){
//     maxinum=arr[i];
//    }
// }
// console.log(maxinum);


// // Q43.Array ke elements ko 2 index rotate karo.
// let arr = [10, 20, 30, 40, 50];
// let rotated=[];
// for(let i=2;i<arr.length;i++){
//     rotated.push(arr[i]);
// }
// for(let i=0;i<2;i++){
//     rotated.push(arr[i]);
// }
// console.log(rotated);


// // Q44. Sare possible subarrays print karo.
// let arr = [1, 2, 3, 4];
// for(let i=0;i<arr.length;i++){
//      for(let j=i+1;j<=arr.length;j++){
//       console.log(arr.slice(i,j));
//      }
// }


// // Q45.Har number ko square karke naya array banao.
// let arr = [5, 10, 15, 20, 25];
// let narr=arr.map(val => {
//    return val*2;
// });
// console.log(narr);


// // Q46.is array ko reverse karo bina reverse method ky.

// let arr = [1, 2, 3, 4, 5];
// let start=0;
// let end  =arr.length-1;
// while(start<end){
//     let tem=arr[start];
//     arr[start]=arr[end];
//     arr[end]=tem;
//     start++;
//     end--;
// }
// console.log(arr);


// //Q47. Sirf un numbers ka sum print karo jo 3 se divisible hain.
// let arr = [2, 4, 6, 8, 10, 12];
// let div=0;
// for(let i of arr){
//     if(i%3==0){
//         div+=i;
//     }
// }
// console.log(div);

// // Q48.is array ko 2 order rotate karo.
// let arr = [10, 20, 30, 40, 50];
// let narr=[];
// for(let i=2;i<=arr.length-1;i++){
// narr.push(arr[i]);
// }
// for(let i=0;i<2;i++){
//     narr.push(arr[i]);
// }
// console.log(narr);


// //  Q49.Negative numbers ko ek array me aur positive numbers ko ek alag array me store karo.
// let arr = [2, 3, -1, -4, 6, -2];
// let Positive = [];
// let Negative = [];
// for(let i of arr){
//     if(i>0){
//         Positive.push(i);
//     }
//     else{
//         Negative.push(i);
//     }
// }


// // Q50.Array ke har possible pair print karo.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//       let sum=0;
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log( [arr[i]+arr[j]]); 
//     }
// }


// // Q51.Array ke har possible pair ka product  print karo.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log( [arr[i]*arr[j]]); 
//     }
// }


// // Q52.Array ke har possible pair ka product  print karo.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum=arr[i]+arr[j];
//       if(sum%2==0){
//         console.log([`${sum} is even`]);
//       }
//       else{
//          console.log([`${sum} is odd`]);
//       }
//     }
// }   


// // Q53.Har index tak ka sum naya array me banao.
// let arr = [1, 2, 3, 4, 5];
// let narr=[];
// let sum=0;
// for(let i=0;i<=arr.length-1;i++){
//  sum+=arr[i];
// narr.push(sum);
// }
// console.log(narr);


// // Q54. Majority Element  Pata karo kaunsa element half se zyada dafa aata hai. (Answer: 2)
// let arr = [2,2,1,1,1,2,2];
// let maxinum=0;
// let majorty=0;
//  for(let i=0;i<=arr.length-1;i++){
//     let sum=0;
//     for(let j=0;j<=arr.length-1;j++){
//      if(arr[i]===arr[j]){
//         sum++;
//      }
//      if(sum>maxinum){
//         maxinum=sum;  
//        majorty=arr[i];
//      }
//     }
//    }
// if(maxinum>arr.length/2){
//   console.log(majorty);
// }
// else{
//    console.log("not majorty");
// }


// // Q55. Two Sum Problem Do numbers ka sum target ke equal ho. Unke indexes print karo.
// // (Output: [0,1] → 2+7=9)
// let arr = [2, 7, 11, 15]
// let target = 9;
// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;j<=arr.length;j++){
//       let sum=arr[i]+arr[j];
//        if(sum===target){
//          console.log([i,j])
//       }
//    }
// }


// // Q56. Product of Array Except Self (Optimized)
// // 👉 Har index ke liye us index ke alawa baaki elements ka product print karo.
// // (Output: [24,12,8,6])
// let arr = [1,2,3,4];
// let narr=[];
// for(let i=0;i<arr.length;i++){
//    let product=1;
//    for(let j=0;j<arr.length;j++){
//      if(i===j){
//       continue;
//      }else{
//       product*=arr[j];
//      }
//    }
//    narr.push(product);
// }
// console.log(narr);


// // Q57. Find Missing Number 1 se 6 tak numbers hone chahiye. Missing number find karo.
// // (Output: 3)
// let arr = [1,2,4,5,6];
// let narr=arr.sort((a,b)=>a-b);
// let missing=[];
// for(let i=0;i<narr.length;i++){
//    let curent=narr[i];
//    let next=narr[i+1];
//    for(let j=curent+1;j<next;j++){
//      missing.push(j);
//    }
// }
// console.log(missing);


// // Q58.Cart me se duplicate fruits hatao taki har fruit sirf ek hi dafa ho.
// let cart = ["apple", "banana", "apple", "mango", "banana"];
// let arr=[];
// for(let i of cart){
//    if(arr.includes(i)){
//       continue;
//    }
//    arr.push(i);
// }
// console.log(arr);


// // Q59. Sirf un prices ko print karo jo 500 se kam hain (jaise product filter).
// let prices = [200, 450, 300, 600, 150];

// let number=prices.filter((val)=>{
//    return val<500;
// });
// console.log(number);


// //Q60. Ek array hai Check karo user input (prompt se naam lo) is array me hai ya nahi.

// let names = ["Ali", "Ahmed", "Sara", "Zara"];
// let user=prompt("eanter a name");
// for(let i=0;i<=names.length-1;i++){
// if(names.includes(user)){
//    console.log("yes ");
// }
// }


// //Q61. Ek array hai Pass students (>= 50) aur Fail students (< 50) ko do alag arrays me divide karo.

// let marks = [85, 92, 45, 77, 60];
// let passstudents=[];
// let failstudents=[];
// for(let i of marks){
//    if(i>=50){
//       passstudents.push(i);
//    }else if (i<50){
//       failstudents.push(i);
// }
// }
// console.log("passstudents = ",passstudents);
// console.log("failstudents = ",failstudents);


// // Q62.Ek array hai Array ke end me ek naya todo "Deploy Website" add karo aur phir updated list print karo.
// let todos = ["Learn JS", "Practice Arrays", "Make Project"];
// todos.push("deploy website");
// console.log(todos);


// // Q63. Har price par 10% discount lagao aur new array banao.
// // Output: [180, 450, 900, 270]
// let prices = [200, 500, 1000, 300];
// let user=Number(prompt("enter a number"));
// let discount=prices.map((val)=>{
//    return val-(val/10);
// });
// console.log(discount);


// // Q64. Har row ka sum print karo.
// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr.length;j++){
//         let a=arr[i][j];
//         sum+=a;
//     }
//     console.log(sum);
// }


// // Q65. Har column ka sum print karo.
// let arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
//  for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr.length;j++){
//         sum+=arr[j][i];  
//     }
//     console.log(sum);
// }


// // Q66.diagonal print karo.
// // Input:
// // // 1 2 3
// // 4 5 6
// // 7 8 9
// // Output: [1,5,9] (left diagonal), [3,5,7] (right diagonal)
// let arr = 
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// let left=[];
// let right=[];
//  for(let i=0;i<arr.length;i++){
//        left.push(arr[i][i]);
//     }
//  for(let i=0;i<arr.length;i++){
//         right.push(arr[i][arr.length-1-i]);
//     }
//   console.log(left);
//   console.log(right);


// // Q67. Transpose of a matrix banao.
// // Input:
// // 1 2 3
// // 4 5 6
// // Output:
// // 1 4
// // 2 5
// // 3 6
// let arr=[[1,2,3],
//         [4,5,6],]
// for(let i=0;i<=arr.length;i++){
//     row=[];
//     for(let j=0;j<arr.length;j++){
//     row.push(arr[j][i]);
//  }
//  console.log(row);  
// }


// //  Q68. 2D array me maximum element find karo (aur uska row+col index bhi).

// let arr=[ [1,2,3],
//           [4,5,6],
//           [7,8,10],
//           [12,2,3,15]
// ];
// let maximum=0;
// let iindex=0;
// let jindex=0
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i][j]>maximum){
//             maximum=arr[i][j];
//              iindex=i;
//              jindex=j;
//         }
//     }
// }
// console.log("maximum element is = ",maximum);
//  console.log("row index= ",iindex ,"column index= ",jindex);


// // Q69.is  array ko  90 dgree rotte karo.

// let arr=[
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let narr=[];
// let nnarr=[];
// for(let i=arr.length-1;i>=0;i--){
//         narr.push(arr[i]);
//     }
//  for(let j=0;j<narr.length;j++){
//     let tem=[];
//      for(let i=0;i<narr.length;i++){
//         tem.push(arr[i][j]);
//      }
//      nnarr.push(tem);
//      }

// console.log(nnarr);



// //Q70.Ek array ka sum nikalne ke liye reduce use karo.
// let arr = [10, 20, 30, 40];
// let sum=arr.reduce((val)=>{
//     return val+val;
// });
// console.log(sum)


// // Q71.Array ke numbers ka maximum reduce se find karo.

// let arr = [ 7, 2, 9, 1];
// let max=arr.reduce((acc,cur)=>{
//     return acc>cur?acc:cur;
// });
// console.log(min);


// // Q72.Array ke numbers ka  minimum reduce se find karo.

// let arr = [ 7, 2, 9, 1];
// let min=arr.reduce((acc,cur)=>{
//     return acc<cur?acc:cur;
// });
// console.log(min);
   

// // Q73.Ek array me har element kitni dafa repeat hua hai uska frequency count banao.

// let arr = ["apple", "banana", "apple", "mango", "banana"];
// let frequency=arr.reduce((acc,cur)=>{
// if(acc[cur]){
//     acc[cur]++;
// }else{
//     acc[cur]=1;
// }
// return acc;
// },{});
// console.log(frequency);


// // Q74.Array ke numbers ko ek string bana do.

// let arr = [1, 2, 3, 4];
// let string=arr.reduce((acc,cur)=>{
//     return acc.toString()+cur.toString();
// });
// console.log( string);


// //Q75. Ek array me sab numbers ko string me convert karo.
// let arr=[1, 2, 3] ;
// let string=arr.map((val)=>{
//     return val.toString();
// });
// console.log(string);


// // Q76.Ek array me sab fruits ke naam uppercase karo.

// let arr=["apple","mango"];
// let uppercase=arr.map((val)=>{
//     return val.toUpperCase();
// })
// console.log(uppercase);


