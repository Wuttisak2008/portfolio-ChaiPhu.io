/* ================= SECTION ================= */

section{

    padding:90px 8%;

}

section h2{

    text-align:center;

    font-size:40px;

    color:var(--blue);

    margin-bottom:50px;

    position:relative;

}

section h2::after{

    content:"";

    width:80px;

    height:4px;

    background:var(--gold);

    display:block;

    margin:15px auto;

    border-radius:10px;

}

/* ================= ABOUT ================= */

.about{

    display:grid;

    grid-template-columns:320px 1fr;

    gap:40px;

    align-items:center;

    max-width:1200px;

    margin:auto;

}

.photo{

    display:flex;

    justify-content:center;

}

.photo img{

    width:280px;

    height:350px;

    object-fit:cover;

    border-radius:20px;

    border:6px solid var(--gold);

    box-shadow:0 15px 35px rgba(0,0,0,.15);

}

.info{

    background:white;

    padding:40px;

    border-radius:20px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.info p{

    font-size:18px;

    margin:18px 0;

    line-height:1.8;

}

/* ================= HIGHLIGHT ================= */

.cards{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:30px;

}

.card{

    background:white;

    padding:35px;

    border-radius:20px;

    border-top:5px solid var(--gold);

    text-align:center;

    transition:.35s;

    box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.card:hover{

    transform:translateY(-10px);

    box-shadow:0 20px 40px rgba(0,43,91,.15);

}

.card h3{

    color:var(--blue);

    margin-bottom:20px;

}

.card p{

    color:#666;

    line-height:1.8;

}

/* ================= GALLERY ================= */

.gallery{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:25px;

}

.gallery img{

    width:100%;

    border-radius:18px;

    cursor:pointer;

    transition:.35s;

    box-shadow:0 10px 25px rgba(0,0,0,.12);

}

.gallery img:hover{

    transform:scale(1.05);

    box-shadow:0 20px 40px rgba(0,43,91,.18);

}

/* ================= CONTACT ================= */

.contact{

    max-width:700px;

    margin:auto;

    background:white;

    padding:40px;

    border-radius:20px;

    text-align:center;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.contact p{

    margin:15px 0;

    font-size:18px;

}

/* ================= FOOTER ================= */

footer{

    background:var(--blue);

    color:white;

    text-align:center;

    padding:30px;

    margin-top:70px;

}
