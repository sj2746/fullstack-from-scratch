//Steps to run:
//1.Open "jsd2.html" and run it.
//2.Right click-> Inspect -> on right in elements row click console.

let str="   Apple   ";
newName=str.trim();
console.log(newName); 					//console.log is used to display output at console.
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());
console.log(newName[0]);
console.log(newName[3]);

//Method Chaining
console.log(str.trim().toUpperCase());
console.log(str.length);


//		   012345678910	
let title="ILoveCoding";
console.log(title.slice(1,5)); //5th position is not considered. (1-4) only

console.log(title.replace("Love","Enjoy"));

let msg="Coding ";
console.log(msg.repeat(10));  //10 represents how many times to repeat 

//------------------------------------------------ARRAYS----------------------------------------------
//----------------------------------------------------------------------------------------------------


let fruits=["Apple","Banana","Pineapple"];
console.log(fruits);
console.log(fruits[2]);
fruits[1]="Orange";	 //Direct assigning values to the position
console.log(fruits); //Replaced 'Banana' with 'Orange'.

//PUSH ()
fruits.push("Mango")	//add to last
console.log(fruits);	//PRINTING

//pop ()
fruits.pop()			//Remove from Last
console.log(fruits);	

console.log(fruits.unshift("pears"));	//add to first
console.log(fruits);

console.log(fruits.shift("pears"));	//add to last
console.log(fruits); 

let colors=["red","yellow","blue"];
console.log(colors.indexOf("yellow"));




