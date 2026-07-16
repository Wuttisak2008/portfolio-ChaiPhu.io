/* ================= Section ================= */

section{

padding:100px 8%;

}

section h2{

font-size:42px;

text-align:center;

color:var(--blue);

margin-bottom:60px;

position:relative;

}

section h2::after{

content:"";

width:90px;

height:4px;

background:var(--gold);

display:block;

margin:15px auto;

border-radius:20px;

}

/* ================= Grid ================= */

.grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:30px;

}

/* ================= Card ================= */

.card{

background:white;

padding:35px;

border-radius:25px;

box-shadow:0 15px 40px rgba(0,0,0,.08);

border-top:6px solid var(--gold);

transition:.35s;

}

.card:hover{

transform:translateY(-10px);

box-shadow:0 25px 50px rgba(11,46,89,.15);

}

.card h3{

color:var(--blue);

margin-bottom:18px;

font-size:24px;

}

.card p{

line-height:1.9;

color:#555;

}

/* ================= Timeline ================= */

.timeline{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:30px;

}

.timeline-card{

background:linear-gradient(135deg,var(--blue),var(--blue2));

padding:35px;

border-radius:25px;

color:white;

position:relative;

overflow:hidden;

transition:.35s;

}

.timeline-card:hover{

transform:translateY(-8px);

}

.timeline-card::before{

content:"";

position:absolute;

top:-50px;

right:-50px;

width:130px;

height:130px;

background:rgba(255,255,255,.08);

border-radius:50%;

}

.timeline-card h3{

color:var(--gold2);

margin-bottom:15px;

}

/* ================= Gallery ================= */

.gallery{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:25px;

}

.gallery img{

width:100%;

border-radius:22px;

cursor:pointer;

transition:.35s;

box-shadow:0 15px 30px rgba(0,0,0,.12);

}

.gallery img:hover{

transform:scale(1.05);

box-shadow:0 20px 45px rgba(11,46,89,.25);

}

/* ================= Contact ================= */

.contact{

max-width:850px;

margin:auto;

background:white;

padding:40px;

border-radius:25px;

box-shadow:0 15px 35px rgba(0,0,0,.08);

border-left:8px solid var(--gold);

}

.contact p{

margin:18px 0;

font-size:18px;

}

/* ================= Footer ================= */

footer{

background:var(--blue);

color:white;

text-align:center;

padding:30px;

margin-top:60px;

}
