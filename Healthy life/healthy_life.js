var home = document.getElementById("landingimg");
window.addEventListener('load', function() {
    
    var images = [
        "/imgs/A-WEB-Goal-01.png",
        "/imgs/A-WEB-Goal-02.png",
        "/imgs/A-WEB-Goal-03.png",
        "/imgs/A-WEB-Goal-04.png",
        "/imgs/A-WEB-Goal-05.png",
        "/imgs/A-WEB-Goal-06.png",
        "/imgs/A-WEB-Goal-07.png",
        "/imgs/A-WEB-Goal-08.png",
        "/imgs/A-WEB-Goal-09.png",
        "/imgs/A-WEB-Goal-10.png",
        "/imgs/A-WEB-Goal-11.png",
        "/imgs/A-WEB-Goal-12.png",
        "/imgs/A-WEB-Goal-13.png",
        "/imgs/A-WEB-Goal-14.png",
        "/imgs/A-WEB-Goal-15.png",
        "/imgs/A-WEB-Goal-16.png",
        "/imgs/A-WEB-Goal-17.png"
      ];
      

    var index = 0;

    function changeBackground() {
        home.style.backgroundImage = 'url(' + images[index] + ')';
        index = (index + 1) % images.length;
        if(index==7)index=0;
      }
      

    setInterval(changeBackground, 2500); 
});



function landing(){
    document.querySelector(".landing").style.cssText="transform:scale(102%);";
    document.querySelector(".limg").style.cssText="filter: brightness(100%); ";
}
function landingout(){
    document.querySelector(".landing").style.cssText="transform:scale(100%);";
    document.querySelector(".limg").style.cssText="filter: brightness(40%);";
}

var i=0,text;
text="معاً\nلحياة\nأفضلل";
setInterval(function(){
    if(i<text.length){
        document.querySelector(".abdullah").innerHTML +=text.charAt(i);
        i++;
        if(i==text.length){
            document.querySelector(".abdullah").innerHTML="";
            i=0;
        }       
    }
},200)


function servscard(card){
    card.style.cssText="transform:scale(105%); color:var(--green); mix-blend-mode: screen;";
}
function servscardout(card){
    card.style.cssText="transform:scale(100%); color:var(--white); mix-blend-mode: screen;";
}

let nums=document.querySelectorAll(".stats #count");
let div=document.querySelector(".stats");
let start=false;

window.onscroll = function(){
    if(window.scrollY>=div.scrollTop){
    if(!start){
        nums.forEach((num)=>counting(num)); 
    } 
    start=true;
    }
}
function counting(el){
     let goal=el.dataset.goal;
     let counter=setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(counter);
        }
     },1500 / goal);
}
counting(document.querySelectorAll(".stats #count"));
