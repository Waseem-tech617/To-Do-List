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
// let left=20-input.value.length;
//     h1.textContent=left;
//     if(left<0){
//        h1.style.color="red";
//     }else{
//         h1.style.color="black";
//     }
// });




// // Project NO : 11 CREATE A FORM VALIDATOR.
// let form=document.querySelector("#form");
// let email=document.querySelector("#email");
// let password=document.querySelector("#password");
// let emailerror=document.querySelector("#emailError");
// let passworderror=document.querySelector("#passError");
// form.addEventListener("submit",function(dets){
//    dets.preventDefault();
//    emailerror.textContent="";
//    passworderror.textContent="";
//    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
//    let emailns=emailRegex.test(email.value);
//    let passwordns=passwordRegex.test(password.value);

//    if(!emailns){
//       emailerror.textContent="Invalid Email";
//       emailerror.style.color="red";

//    }
//    if(!passwordns){
//       passworderror.textContent="Invalid Email";
//       passworderror.style.color="red";

//    }

// });


// //  Project NO : 12 USE OF SETITERVAL AND CLEARINTERVAL TO CREATE A COUNTER FROM REVERSE .
// let count=10;
// let time=setInterval(function(){
//     if(count>=0){
//     console.log(count);
//     count--;
//     }
//     else clearInterval(time);
// },1000);


// //  Project NO : 13 USE OF SETITERVAL AND CLEARINTERVAL TO CREATE A COUNTER PROGRESS BAR .
// let progress=document.querySelector("#progress-bar");
// let p=document.querySelector("p");
// let count=0;
// let interval=setInterval(function(){
// if(count<=99){
//    count++;
//    progress.style.width=count+"%";
//    p.textContent=count+"%";
// }else clearInterval(interval);
// },60);


let input = document.querySelector("input");
let cards = document.querySelector(".cards");
let h1=document.querySelector("h1");

let users = [
    {
        pic: "images/pic1.jpg",
        Name: "waseem",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic2.jpg",
        Name: "ali",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic3.jpg",
        Name: "amin",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic4.jpg",
        Name: "saleem",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic5.jpg",
        Name: "samad",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    },
    {
        pic: "images/pic6.jpg",
        Name: "asgar",
        bio: "Frontend Developer in progress | Learning JavaScript, CSS & Web Development | Building projects and improving every day."
    }
];


function showusers(arr) {
    arr.forEach(function (user) {
        let card = document.createElement("div");
        card.classList.add("card");

        let image = document.createElement("img");
        image.classList.add("bg-img");
        image.src = user.pic;

        let blurredlayer = document.createElement("div");
        blurredlayer.classList.add("blurred-layer");

        let content = document.createElement("div");
        content.classList.add("content");

        let h3 = document.createElement("h3");
        h3.textContent = user.Name;
        let p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);
        card.appendChild(image);
        card.appendChild(blurredlayer);

        card.appendChild(content);
        cards.appendChild(card);
    });
}

input.addEventListener("input", function () {
     document.querySelector("h1").textContent="";
    let search = users.filter(function (user) {
            return user.Name.startsWith(input.value);
    });
    if(search.length==0){
        h1.textContent="No result";
    }
          cards.innerHTML = "";
          showusers(search);
});







