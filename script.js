// =========================
// Portfolio V5 Script
// =========================

// Animation เมื่อเลื่อน

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll(".card,.timeline-card,.gallery img,.contact").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// =========================
// Zoom รูป Portfolio
// =========================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="overlay";

overlay.innerHTML=`<img src="${img.src}">`;

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

});

});


// =========================
// ปุ่มกลับด้านบน
// =========================

const topBtn=document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =========================
// Navbar เปลี่ยนสีเมื่อเลื่อน
// =========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(11,46,89,.98)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(11,46,89,.92)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}

});
