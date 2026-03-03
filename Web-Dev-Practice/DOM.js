// // Project NO : 1 BUTTON CLICK ON OFF.
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//     if (button.classList.toggle("ON")) {
//         button.innerText = "ON";
//     } else {
//         button.innerText = "OFF";
//     }
// });



// // Project NO : 2 USE  OF INPUT EVENTLISTENER.
// let input = document.querySelector("input");
// input.addEventListener("change", function (val) {
//     console.log(val);
// });



// // Project NO : 3 USE  OF CHANGE EVENTLISTENER.
// let h3 = document.querySelector("h3");
// let select = document.querySelector("select");
// select.addEventListener("change", function (dets) {
//     h3.textContent = `Fruits Selected Is : ${dets.target.value}`;
// });



// // Project NO : 4 USE  KEYDOWN EVENTLISTENER.
// let h1 = document.querySelector(" h1");
// window.addEventListener("keydown", function (val) {
//     h1.textContent = `${val.key}`;
// });



// // Project NO : 5 USE  OF CLICK AND CHANGE EVENTLISTENER.
// let file=document.querySelector("#input");
// let btn=document.querySelector("#btn");
// btn.addEventListener("click",function(){
// file.click();
// });
// file.addEventListener("change",function(val){
// let file=val.target.files[0];
// if(file){
//     btn.textContent=file.name;
// }
// });



// // Project NO : 6 USE  OF SUBMIT EVENTLISTENER. IF WE SUBMIT FORM THEN APEAR NEW CARD WITH FORM VALUES .
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (val) {
//     val.preventDefault();
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let image = document.createElement("img");
//     image.setAttribute("src", inputs[3].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[0].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[2].value;

//     let h4 = document.createElement("h4");
//     h4.textContent = inputs[1].value;

//     profile.appendChild(image);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(p);
//     card.appendChild(h4);
//     main.appendChild(card);
// });



// //  Project NO : 7 USE  OF MOUSEOVER EVENTLISTENER. IF WE MOVE MOUSE  THEN WITH OVER DIV MOVE WITH MOUSE MOVEMENT.
// let box=document.querySelector("#box");
// document.addEventListener("mouseover",function(val){
// box.style.top=val.clientY +"px";
// box.style.left=val.clientX+"px";
// box.style.backgroundColor="red";

// });



// // Project NO : 8 USE  OF KEYUP EVENTLISTENER.
// document.addEventListener("keyup", function(val) {
// box.style.backgroundColor="red";
// });


// //  Project NO : 9 PRACTICE BUBLING CONCET.
// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//   dets.target.classList.toggle("l"); 
// })


// //  Project NO : 10 COUNT CHARCTERS.
// let input=document.querySelector("input");
// let h1=document.querySelector("span");
// input.addEventListener("input",function(dets){
//    h1.textContent=input.value.length;
// });


