//Methods 
let calculator={
	add: function(a,b){ return a+b; },
	sub: function(a,b){ return a-b; },
	mul: function(a,b){ return a*b; }
};
calculator.add(56,65);

//Methods Shorthand
let cals={
	add(a,b){ return a+b; },
	sub(a,b){ return a-b; },
	mul(a,b){ return a*b; }
};
//Same output for both 

//this key
const student={
	name:"sajan",
	age:25,
	eng:91,
	kan:98,
	hindi:89,
	getAvg(){
		let avg=(this.eng+this.kan+this.hindi)/3;
		console.log(avg);
	}
}

//without try and catch
// console.log("Sentence 1");
// console.log("Sentence 2");
// console.log("Sentence 3");
// console.log(a);
// console.log("There is error");
// console.log("Sentence 1");
// console.log("Sentence 2");
// console.log("Sentence 3");
// here after error anything won't display 



//with try and catch
try{
console.log("Sentence 1");
console.log("Sentence 2");
console.log("Sentence 3");
console.log(a);}
catch{
	console.log("There is error");
}
console.log("Sentence 1");
console.log("Sentence 2");
console.log("Sentence 3");

//Miscellaneous Topics

//Arrow function
let sum=(a,b)=>{
	console.log(a+b);
	}
	
sum(8,7);

let cube=a=>{
	return a*a*a;
}
let hello=()=>{
	console.log("hi, hello");
}

//using 'this' keyword
let obj={
	name:"sajan",
	m1:98,
	m2:95,
	m3:86,
	avgMarks(){
		let average=(this.m1+this.m2+this.m3)/3;
		console.log(average);
	}
}

let std={
	name:"aman",
	marks:95,
	prop:this, //global scope
	getName :function(){		//calling obj
		console.log(this.name);
	},
	getMarks:()=>{
		console.log(this);
	}
};
console.log(this);
std.getName();
std.getMarks();

//using forEach
let arr=[1, 4, 6, 7, 2, 3, 9];
arr.forEach((el)=>{
	console.log(el);
});

let squ=arr.map((square)=>{
	return square*square;
});
console.log(squ);

let ava=arr.filter((elu)=>{
	 return elu%2==0		//For Even
});
console.log(ava);

let checkForEvery=arr.every((elu)=>{
	 return elu%2==0		//Returns true if this condition is true for all elements
});
console.log(checkForEvery);

let checkForSome=arr.some((elu)=>{
	 return elu%2==0		//Returns true if this condition is true any one of the element.
});
console.log(checkForSome);






