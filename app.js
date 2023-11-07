
var timer = 60;
var score = 0;
var hitrn = 0;

//jispe click karoge uss element par event hoga, 
//aur event listner na milne par even element ke parent par listerner dhundega,
// waha bhi na milne par even parent ke parent par listner dhundega

function ScoreCnt(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function hitMan(){
    hitrn = Math.floor(Math.random()*20);
    document.querySelector("#hitVal").textContent = hitrn;
}

function timerCount(){

    var timerId = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearTimeout(timerId);
            var content = document.querySelector(".bottomPan");
            content.style.flexDirection = "column";
            content.innerHTML = `<h1>Game Over</h1>`;
            content.innerHTML += `<h2 class="res">Score: ${score}</h2>`;
        }
    }, 1000)
}

function makeBubble(){
    var clutter = "" ;

    for(var i=1; i<=160; i++){
        var rn = Math.floor(Math.random()*20);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".bottomPan").innerHTML = clutter;
}

document.querySelector(".bottomPan")
    .addEventListener("click", function(e){
        var HitTarget = Number(e.target.textContent);
    
    //var Hitnum = Number(document.querySelector("#hitVal").textContent);

    if(hitrn === HitTarget){
        ScoreCnt();
        makeBubble();
        hitMan();
    }
});

makeBubble();
timerCount();
hitMan();