let h1=document.querySelector('h1');
let btn=document.querySelector('Button');
let img=document.querySelector('img');
let glow=false;
btn.addEventListener("click",check);

function check(){
if (!glow){
	img.src="bulb.jpg";
	img.style.width='150px';
	img.style.height='150px';
	glow=true;
}
else{
	img.src="off.jpg";
	img.style.width='150px';
	img.style.height='150px';
	glow=false;
}};
console.dir(h1);