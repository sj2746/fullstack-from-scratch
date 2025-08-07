//Accessing array using for loop
let array=["BMW","Audi","Benz","Toyota","Maruti"];
for (let i=0;i<array.length;i++){
	console.log(array[i]);
}

//Objects
let car1={
	name:"Audi",
	model:"Q5",
	year:1995,
	color:"White"
};
for(let detail in car1){
	console.log(`${detail} : ${car1[detail]}`);
}

 let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  }
 ];
for (let car of cars){
  if(car.color !== "black"){
    continue;
  }
    console.log(car);
}

//Remember prompt(), console. log(), push(), and sort() for arrays
//Functions
//CREATING FUNCTION #1st Method
function hello(){
	let you=prompt("What's your name:");
	console.log(`Hello ${you}`);
}

//CREATING FUNCTION #2 Method
let greet=function(){
	let insideFun="I'm in a function";
	console.log(`${insideFun}`)
};

//Parameter 
function addTwoNumber(x=5,y=5){
	return x+y;
};

//Shorthand function 
let addTwoNo=(x,y)=>console.log(x+y);


 let add = ["so",1,3.5];
 let message = ["JavaScript", "is", ...add, "and", "very", 
               "powerful"];
console.log(message);