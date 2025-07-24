let gameSeq=[];
let userSeq=[];
let h3=document.querySelector('h3');
let btns=["red","green","blue","yellow"];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
	if(started==false){
		console.log("Game Started");
		started=true;
		levelUp();
	}
});

function btnFlash(btn){
	btn.classList.add("flash");
	setTimeout(function(){
		btn.classList.remove("flash");
	},250);
};

function levelUp(){
	userSeq=[];
	level++;
	h2.innerText=`Level ${level}`;
	let randIdx=Math.floor(Math.random()*4);
	let randColor=btns[randIdx];
	let randBtn=document.querySelector(`.${randColor}`);
	gameSeq.push(randColor);
	console.log(gameSeq);
	btnFlash(randBtn);
};
function checkAns(idx){
	if (userSeq[idx]===gameSeq[idx]){
		if(userSeq.length==gameSeq.length){
		setTimeout(levelUp,1000);
		let points=gameSeq.length*10;
	h3.innerText=`Your Score is: ${points}`;
		}
	}
	else{
		h2.innerText=`Game Over! Press any key to start`;
		score();
		reset();
		started=false;
	}
}
function btnPress(){
	let btn=this;
	btnFlash(btn);
	
	userColor=btn.getAttribute("id");
	userSeq.push(userColor);
	console.log(userSeq);
	
	checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
	btn.addEventListener("click",btnPress);
};

function reset(){
	gameSeq=[];
	userSeq=[];
	level=0;
};
function score(){
	let points=gameSeq.length*10-10;
	alert(`Your Score is: ${points}`);
}