console.log("Enter the program number to run:");
program=Number(prompt(`	1. Sum of two numbers 
	2. Simple Operation
	3. Print 'n' Natural number 
	4. Find Area of Traingle
	5. Area of Circle
	6. Find Simple Interest
	7. Find Perimeter of Rectangle
	8. Finding even or odd
	9. Find greatest of Three Numbers
	10. Roll a random dice
	11. EXIT `));
	switch (program){
		case 1:
			sum();
			break;
		case 2:
			simple_operations();
			break;
		case 3:
			natural_no();
			break;
		case 4:
			area_of_triangle();
			break;
		case 5:
			area_of_circle();
			break;
		case 6:
			simple_interest();
			break;
		case 7:
			perimeter_of_rect();
			break;
		case 8:
			odd_or_even();
			break;
		case 9:
			great_of_3();
			break;
		case 10:
			dice_roll();
			break;
		case 11:
			break;
		default:
			console.log("INVAILD INPUT");
	}

function sum(){
//1
//sum of two numbers
let n1=Number(prompt("Enter Number 1:"));
let n2=Number(prompt("Enter Number 2:"));
sum=n1+n2;
alert(`Sum is:${sum}`);
}


function simple_operations(){	
//2
//Program to perform arithmetic functions	
n1=Number(prompt("Enter number 1:"));
n2=Number(prompt("Enter number 2:"));
op=prompt("Enter op name:+ or - or * or / :")
switch(op){
	case "+":
		res=n1+n2;
		alert(`Result is ${res}`);
		break;
	case "-":
		res=n1-n2;
		alert(`Result is ${res}`);
		break;
	case "*":
		res=n1*n2;
		alert(`Result is ${res}`);
		break;
	case "/":
		res=n1/n2;
		alert(`Result is ${res}`);
		break;
	default :
		alert("Wrong Input");
		break;
}
}

function natural_no(){
//3
//program to print first 'n' natural numbers
let Nat_arr=[];
n=Number(prompt("Enter the size to print natural numbers"));
console.log(`First ${n} natural numbers are:`);
for(let i=1;i<=n;i++){
	Nat_arr.push(i);
}
alert(`The Natural numbers are: ${Nat_arr}`);
}


function area_of_triangle(){
//4
//program to find area of triangle
let height_of_tri=Number(prompt("Enter height of triangle"));
let breadth_of_tri=Number(prompt("Enter breadth of triangle"));
Res=0.5*breadth_of_tri*height_of_tri;
alert(`Area of Triangle is: ${Res}`);
};


function area_of_circle(){
//5 
//Area of circle
const PI=3.141;
radius_of_circle=prompt("Enter radius of circle:");
Area_of_circle=PI*radius_of_circle*radius_of_circle;
alert(`Area of Circle is: ${Area_of_circle}`);
};

function simple_interest(){
//6
//Simple Interest
let principal=prompt("Enter Principal Amount:");
let time=prompt("Enter Years:");
let rate=prompt("Enter Rate of Interest:");
prin_int=(principal*time*rate)/100;
alert(`Simpe Interest is ${prin_int}`);
}

function perimeter_of_rect(){
//7
//Perimeter of Rectangle
	len=Number(prompt("Enter Length of Rectangle:"));
	breadth=Number(prompt("Enter Breadth of rectangle:"));
	peri=2*(len+breadth);
	alert(`Perimeter of Rectangle is: ${peri}`);
}

function odd_or_even(){
//8
//Find even or odd
	num=Number(prompt("Enter a number:"));
	if (num%2==0){
		alert(`${num} is Even`);
	}else{
		alert(`${num} is Odd`);
	}
}

function great_of_3(){
//9
//Find greatest of 3 numbers	
	num1=Number(prompt("Enter num 1:"));
	num2=Number(prompt("Enter num 2:"));
	num3=Number(prompt("Enter num 3:"));
	if (num1>num2 &&num3){
		alert(`${num1} is greater`);
	}else if(num2>num1&&num3){
		alert(`${num2} is greater`);
	}else{
		alert(`${num3} is greater`);
	}
}

function dice_roll(){
//10
//Random Dice Roll
	number=Math.floor(Math.random()*6)+1;
	alert(`Dice number is : ${number} `);
}