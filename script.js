/*==========================
Buttons
==========================*/

.buttons{

margin-top:35px;

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}

.btn{

padding:15px 35px;

background:linear-gradient(45deg,#FFD54F,#FFC107);

color:#0A2540;

text-decoration:none;

border-radius:50px;

font-weight:700;

transition:.35s;

box-shadow:0 10px 30px rgba(255,193,7,.35);

}

.btn:hover{

transform:translateY(-6px);

box-shadow:0 15px 40px rgba(255,193,7,.5);

}

.btn2{

padding:15px 35px;

border:2px solid white;

color:white;

text-decoration:none;

border-radius:50px;

transition:.35s;

}

.btn2:hover{

background:white;

color:#0A2540;

}

/*==========================
Section
==========================*/

section{

padding:100px 8%;

}

section h2{

font-size:42px;

text-align:center;

margin-bottom:55px;

color:#FFD54F;

}

section h2::after{

content:"";

display:block;

width:90px;

height:4px;

background:#FFD54F;

margin:15px auto;

border-radius:30px;

}

/*==========================
About
==========================*/

.about{

display:grid;

grid-template-columns:320px 1fr;

gap:40px;

align-items:center;

}

.left{

display:flex;

justify-content:center;

}

.left img{

width:270px;

height:350px;

object-fit:cover;

border-radius:25px;

border:5px solid #FFD54F;

}

.right{

background:rgba(255,255,255,.08);

backdrop-filter:blur(15px);

padding:40px;

border-radius:25px;

border:1px solid rgba(255,255,255,.15);

box-shadow:0 15px 40px rgba(0,0,0,.2);

}

.right h3{

font-size:30px;

margin-bottom:20px;

color:#FFD54F;

}

.right p{

line-height:2;

}

/*==========================
Cards
==========================*/

.cards{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

}

.card{

background:rgba(255,255,255,.08);

backdrop-filter:blur(20px);

padding:35px;

border-radius:25px;

text-align:center;

border:1px solid rgba(255,255,255,.12);

transition:.35s;

}

.card:hover{

transform:translateY(-10px);

box-shadow:0 0 35px rgba(66,165,245,.45);

}

.card h3{

margin:15px 0;

color:#FFD54F;

font-size:24px;

}

.card p{

opacity:.9;

}
