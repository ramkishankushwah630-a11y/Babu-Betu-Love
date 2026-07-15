// ==========================
// Babu ❤️ Betu
// Premium Love Website
// ==========================

// Secret Password
const PASSWORD = "Betu29022005";

// Photos
const photos = [
    "betu1jpeg",
    "betu2.jpeg",
    "betu3.jpeg"
];

// Love Letter
const letter = `
Dear Betu ❤️,

Every heartbeat of mine whispers your name.

You are the most beautiful chapter of my life.

Your smile makes my world brighter.

No matter what happens...

I will always love you.

Forever Yours,

❤️ Babu ❤️
`;


// Password Check
function login(){

    const pass = document.getElementById("password").value;

    if(pass===PASSWORD){

        document.getElementById("login").style.display="none";
        document.getElementById("main").style.display="block";

        startMusic();
        startHearts();
        startTyping();
        startSlider();

        setTimeout(showCelebration,8000);

    }else{

        document.getElementById("error").innerHTML="❌ Wrong Password";

    }

}


// Music
function startMusic(){

    const music=document.getElementById("music");

    music.volume=0.6;

    music.play().catch(()=>{

        alert("Tap anywhere after opening to play music.");

    });

}


// Image Slider

let index=0;

function startSlider(){

    const img=document.getElementById("slide");

    setInterval(()=>{

        index++;

        if(index>=photos.length){

            index=0;

        }

        img.style.opacity=0;

        setTimeout(()=>{

            img.src=photos[index];

            img.style.opacity=1;

        },400);

    },4000);

}


// Typewriter

function startTyping(){

    let i=0;

    const target=document.getElementById("typing");

    target.innerHTML="";

    const timer=setInterval(()=>{

        target.innerHTML+=letter.charAt(i);

        i++;

        if(i>=letter.length){

            clearInterval(timer);

        }

    },45);

}


// Hearts Rain

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*25)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },250);

}


// Celebration

function showCelebration(){

    const box=document.createElement("div");

    box.style.position="fixed";
    box.style.top="0";
    box.style.left="0";
    box.style.width="100%";
    box.style.height="100%";
    box.style.background="rgba(0,0,0,.65)";
    box.style.display="flex";
    box.style.justifyContent="center";
    box.style.alignItems="center";
    box.style.flexDirection="column";
    box.style.zIndex="99999";

    box.innerHTML=`
        <h1 style="
        font-size:60px;
        color:#ff4da6;
        text-shadow:0 0 25px white;
        animation:pulse 1s infinite;
        ">
        ❤️ I LOVE YOU BETU ❤️
        </h1>

        <h2 style="margin-top:20px;">
        Forever Yours,
        <br>
        Babu ❤️
        </h2>
    `;

    document.body.appendChild(box);

    fireworks();

}



// Fireworks

function fireworks(){

    const canvas=document.createElement("canvas");

    document.body.appendChild(canvas);

    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    let particles=[];

    function boom(){

        for(let i=0;i<120;i++){

            particles.push({

                x:canvas.width/2,

                y:canvas.height/2,

                dx:(Math.random()-0.5)*10,

                dy:(Math.random()-0.5)*10,

                life:100

            });

        }

    }

    boom();

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach((p)=>{

            p.x+=p.dx;

            p.y+=p.dy;

            p.life--;

            ctx.beginPath();

            ctx.arc(p.x,p.y,3,0,Math.PI*2);

            ctx.fillStyle="gold";

            ctx.fill();

        });

        particles=particles.filter(p=>p.life>0);

        requestAnimationFrame(animate);

    }

    animate();

}
