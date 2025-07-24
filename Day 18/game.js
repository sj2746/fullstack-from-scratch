console.dir(document);
let started=false;
let level=0;
let h2=document.querySelector('h2');
console.dir(h2);
let btn=document.querySelector('Button');
document.addEventListener("keypress",function(){
	odd();
	if(started==false){
	console.log("Game started");
	level++;
	}
	started=true;
	levelUp();
});
function levelUp(){
	h2.innerText=`Level ${level}`;
}
function odd(){
	setTimeout(function(){
		btn.classList.add("highlight");
	},250);
};