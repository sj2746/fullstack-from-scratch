// let btns=document.querySelectorAll('Button');
// for(btn of btns){
	// // btn.onclick=sayhello;
	// // btn.onclick=sayhi;
	
	// // btn.addEventListener("click",sayhello);
	// // btn.addEventListener("click",sayhi);
	// btn.addEventListener("dblclick",()=>{
		// alert("YOU DOUBLE LICKED")
	// });
	// }

// // btn.onclick=function(){
	// // alert("You clicked button");
// // };

// function sayhello(){
	// alert("say hello");
// };
// function sayhi(){
	// alert("say Hi");
// };

let btn=document.querySelector('button');

btn.addEventListener("click",()=>{
	let h3=document.querySelector('h3');
	let randomColor=getRandom();
	h3.innerHTML=getRandom();

	let div=document.querySelector('div');
	div.style.backgroundColor=randomColor;	
	console.log("color updated");
	
});

function getRandom(){
	let red=Math.floor(Math.random()*255);
	let green=Math.floor(Math.random()*255);
	let blue=Math.floor(Math.random()*255);
	
	let color=`rgb(${red},${green},${blue})`;
	return color;
};