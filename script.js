// sticky navigations

let nav=document.querySelector("nav");
let scrollBtn= document.querySelector(".scroller a");
 let val;


 window.onscroll=function(){
     if (document.documentElement.scrollTop >20){
         nav.classList.add("sticky");
         scrollBtn.style.display="block";
     } else{
         nav.classList.remove("sticky");
         scrollBtn.style.display="block";
     }

 }



//  menubuttons navbar

let body= document.querySelector("body")
let menuBar=document.querySelector(".menubar")
let menuBtn=document.querySelector(".menu-btn")
let cancelBtn=document.querySelector(".cancle-btn")

menuBtn.onclick = function(){
    console.log("Hora hai")
    menuBar.classList.add("active");
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    body.style.overflow="hidden";
    scrollBtn.style.pointerEvents="none";


}
cancelBtn.onclick = function(){
    console.log("Hora hai")
    menuBar.classList.remove("active");
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    body.style.overflow="auto";
    scrollBtn.style.pointerEvents="auto";


}


// navication bar is close when we press in menubar


let navLinks= document.querySelectorAll(".menu li a");
for (var i=0;i<navLinks.length; i++){
    navLinks[i].addEventListener("click",function(){
        menuBar.classList.remove("active");
        menuBtn.style.opacity="1";
        body.style.overflow="auto";
        menuBtn.style.pointerEvents="auto";

    });
}
// let navlinks= document.querySelector(".menu li a");
// for (var i=0;i<navlinks.length; i++){
//         navlinks[i],addEventListener("click",function(){
//             menuBar.classList.remove("active");
//             menuBtn.style.opacity="1";
//             menuBtn.style.pointerEvents="auto";
//             })
// //         } 



// blinkkkkkk One


const texts=["FrontendDevloper","FreeLancer","YouTuber","PhotoGrapher"];
let count =0;
let index =0;
let currentText ="";
let letter="";
(function type(){

if(count===texts.length){
    count=0;

}
currentText=texts[count];
letter=currentText.slice(0,++index);
document.querySelector(".text-three").textContent=letter;
if(letter.length===currentText.length){
    count++;
    index=0;

}
setTimeout(type,200);


}());


// projects js


// let proJect=document.querySelector(".projects .projects-container .text ");
// proJect.onclick=(function projects(){
//     console.log("Undeer projects");
//     location.href="https://github.com/sachinb2010/Rock-Paper-Scisors-With-Python"

// }());
let project1=document.getElementById("text1")
project1.addEventListener("click",alertfun);

function alertfun(){
    alert("This link going to another Website");
    location.href="https://github.com/sachinb2010/Rock-Paper-Scisors-With-Python";
}

let project2=document.getElementById("text2")
project2.addEventListener("click",alertfuns);

function alertfuns(){
   alert("This link going to another Website");
   location.href="https://github.com/sachinb2010/Rock-Paper-Scisors-With-Python";
}
let project3=document.getElementById("text3")
project3.addEventListener("click",alertfunes);

function alertfunes(){
   alert("This link going to another Website");
   location.href="https://github.com/sachinb2010/Rock-Paper-Scisors-With-Python";
}
let project4=document.getElementById("text4")
project4.addEventListener("click",alertfunse);

function alertfunse(){
   alert("This link going to another Website");
   location.href="https://github.com/sachinb2010/Rock-Paper-Scisors-With-Python";
}