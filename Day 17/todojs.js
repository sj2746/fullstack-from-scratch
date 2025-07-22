let inp=document.querySelector('input');
let btn=document.querySelector('Button');
let ul=document.querySelector('ul');
let lis=document.querySelectorAll('li');
let h3=document.querySelector('h3');

btn.addEventListener("click", function(){
	let item=document.createElement('li');
	let delBtn=document.createElement('Button');
	delBtn.innerText='X';
	delBtn.classList.add("delete");
	item.classList.add("hoby");
	item.innerText=inp.value;
	ul.appendChild(item);
	item.appendChild(delBtn);
	inp.value="";
	h3.innerText=`Added ${inp.value} Successfully!`;
	
});
let delBtns=document.querySelectorAll(".delete");

ul.addEventListener("click",function(event) {
	if (event.target.nodeName=="BUTTON"){
	let listItem=event.target.parentElement;
	listItem.remove();
	}
});
