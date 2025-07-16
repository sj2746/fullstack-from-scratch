//Steps to run:
//1.Open "jsd2.html" and run it.
//2.Right click-> Inspect -> on right in elements row click console.

//Loops-To iterate
// for(initialization;condition;increment/decrement){
	// statements;
// }

for (let i=0;i<5;i++)
{
	console.log(i);
}
//Output: 0 1 2 3 4

for (let i=1;i<=5;i=i+1)
{
	console.log(i);
}
//Output: 1 2 3 4 5

//odd no from 1-15
for(let i=1;i<=15;i=i+2)
{
	console.log(i);
}

//even no from 2-10
for(let i=2;i<=10;i=i+2)
{
	console.log(i);
}

// infinite loops
// for (let i=1;i>=0;i++)	
// {
	
// }

//multiplication table of 5
let num=5;
console.log("The Table of 5 is:");
for (let i=1;i<11;i++)
{
	console.log(`${num}*${ i}=${ num*i}`);
}

//Nested for loops
console.log(`The Nested Loop`);
for(let i=1;i<=3;i++){
	console.log(`Outer Loop ${i}`);
	for( let j=1;j<=3;j++){
		console.log(j);
	}
}

//for of loop
let fruits=["apple","banana","orange"];
for(fruit of fruits){
	console.log(fruit);
}

//Object Literals
const students={
	name:"Aman",
	age:18,
	salary:`18k`
};
console.log(students);
console.log(students["age"]);
students.grade="A+";		//add
console.log(students);
students.grade="O+";		//update
console.log(students);	
console.log(delete students.grade);	//delete
console.log(students);		//display

//Nesting of Objects
const toppers={
	aman:{
		city:"Delhi",
		grade:"O"
	},
	shweta:{
		city:"Pune",
		grade:"A+"
	},
	ram:{
		city:"Gurgaon",
		grade:"A"
	}
};
console.log(toppers);

//Nesting of arrays
const cars=[
	[name="bmw",color="blue"],
	[name="audi",color="black"],
	[name="porshe",color="white"],
	];
console.log(cars);
console.log(cars[1]);
console.log(cars[1][1]);

//Math.Object
//Prints random number from 1-100
let nums=Math.floor(Math.random()*100)+1;
console.log(nums);




