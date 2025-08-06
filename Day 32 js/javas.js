//If else if 
let day=3;
if(day==1){
	console.log("Monday");
}else if (day==2){
	console.log("Tuesday");
}else if (day==3){
	console.log("Wednesday");
}else if (day==4){
	console.log("Thursday");
}else if (day==5){
	console.log("Friday");
}else if (day==6){
	console.log("Saturday");
}else if (day==7){
	console.log("Sunday");
}

//switch
switch(day){
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	case 7:
		console.log("Sunday");
		break;
	default:
		console.log("Enter from 1 to 7!");
		break;
}

//Math.random geneartes number between 0 and 1.
let randomNo=Math.floor(Math.random()*100)+1
console.log(randomNo);

//Loops
// • while loop
 // • do while loop
 // • for loop
 // • for in
 // • for of loop
 
//Printing Numbers 1-10 using different loops

//WHILE loop
console.log("while loop")
let i=1;
while (i<=10){
	console.log(i);
	i++;
}

//For loop
console.log("for loop")
for(i=1;i<=10;i++){
	console.log(i);
}

//Using PUSH
arrs=["bmw","audi","toyota"];
arrs.push("cheetah");
console.log(arrs);
arrs.shift();		//shift() Removes first element
console.log(arrs);