// ==========================
// PORTFOLIO V7 SCRIPT
// ==========================



// Loading Effect

window.addEventListener("load",()=>{


const loader = document.querySelector(".loader");


setTimeout(()=>{

loader.style.display="none";

},2500);


});





// Scroll Reveal Animation


const sections = document.querySelectorAll("section");


const reveal = ()=>{


sections.forEach(sec=>{


const top = sec.getBoundingClientRect().top;


if(top < window.innerHeight - 100){


sec.style.opacity="1";

sec.style.transform="translateY(0)";


}


});


};



sections.forEach(sec=>{


sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1s";


});



window.addEventListener(
"scroll",
reveal
);


reveal();







// Mouse Glow Effect


const glow = document.createElement("div");


glow.className="mouse-glow";


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";


});







// Image Click Zoom


const images=document.querySelectorAll(".gallery img");


images.forEach(img=>{


img.addEventListener("click",()=>{


img.classList.toggle("zoom");


});


});








// Active Menu


const links=document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(sec=>{


const sectionTop=sec.offsetTop-150;


if(scrollY>=sectionTop){

current=sec.id;

}


});



links.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")=="#"+current){


link.style.color="#FFD54F";


}


});


});
