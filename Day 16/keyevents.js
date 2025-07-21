// let btn=document.querySelector("Button");
// btn.addEventListener("click",function(event) {	
	// console.log(event);
	// console.log("button cicked");
// });
// btn.addEventListener("dblclick",function(event) {	
	// console.log(event);
	// console.log("double button cicked");
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){	//keyup
	// console.log("Key=",event.key);
	// console.log("Code=",event.code);
	// console.log("Key was pressed");			//released
// });
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
	event.preventDefault();		//To stop /action from HTML
	
	let inp=document.querySelector("input");
	console.dir(inp);
	console.dir(inp.value);		//This will not printed 
});