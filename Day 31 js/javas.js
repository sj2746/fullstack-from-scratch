 // • Arrays and their properties
 // • Array methods
 // • Multidimensional arrays
 // • Objects in JavaScript
 // • Working with objects and arrays
 
 let emtArr=new Array(10); //Creates empty array
 
 colors=["black","red","green"];	//New array
 console.log(colors.length);	//Returns total items
 colors[colors.length]="blue";	//Insert at last
 colors[colors.length]="gray";
 console.log(colors);
 
 //Array an have mixed Data types
 let carBrand=["BMW","Audi","Porsche","Toyota"];
 //				0       1      2         3
 console.log(carBrand[3]);
 
 carBrand[3]="Dodge";
 console.log(carBrand);
 
 carBrand[-1]="Supra";
  console.log(carBrand);
 // console.log(carBrand[-1]); --UNDEFINED
 
 
  // Practice exercise 3.1
 // 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
// "Apples."
 // 2. Check your list length in the console.
 // 3. Update "Bread" to "Bananas."
 // 4. Output your entire list to the console.
 
 shoppingList=["Milk","Bread","Apples"];
 console.log(shoppingList);
 shoppingList[1]="banana";
 console.log(shoppingList);
 
 shoppingList.push("Orange");	//push() method
 console.log(shoppingList);
 //["Milk","banana","Apples","Orange"] 
 
 
 shoppingList.splice(2,1,"Lime","Coconut");	//splice() method
 //splice(position=' ',removingNoOfExistingElements=' ',NewElement1,2.......)
 console.log(shoppingList);
 
 let newNo1=[1,2,3,4,5];
 let newNo2=[6,7,8,9];
 
 // let newNo=newNo1+newNo2;
 // console.log(newNo);		//1,2,3,4,56,7,8,9 not comma between two arrays
 
 let newNo=newNo1.concat(newNo2); //concat() method
 console.log(newNo); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
 console.log(newNo.concat("car","bike"));	//temporary
 newNo.pop();				//pop() method  REMOVES LAST ELEMENT
 console.log(newNo);	//[1, 2, 3, 4, 5, 6, 7, 8]
 newNo.shift();
 console.log(newNo);	//shift() method REMOVES FISRT ELEMENT
 
 //newNo = [2, 3, 4, 5, 6, 7, 8]
 let findNo1=newNo.indexOf(4);	//indexOf() method FINDS INDEX IF EXIST
 console.log(findNo1);	//2
  console.log(10 );	//-1 means NOT FOUND
 
let animals=["cat","Dog","cow","duck","Hen"];
console.log(animals.sort());	//sort() method SORTS USING ASCII NUMBERS
console.log(animals.reverse());

// Practice exercise 3.2
 // 1. Create an empty array to use as a shopping list.
 // 2. Add Milk, Bread, and Apples to your list.
 // 3. Update "Bread" with Bananas and Eggs.
 // 4. Remove the last item from the array and output it into the console.
 // 5. Sort the list alphabetically.
 // 6. Find and output the index value of Milk.
 // 7. After Bananas, add Carrots and Lettuce.
 // 8. Create a new list containing Juice and Pop.
 // 9. Combine both lists, adding the new list twice to the end of the first list.
 // 10. Get the last index value of Pop and output it to the console.
 
 shopList=[];
 shopList.push("Milk","Bread","Apples");
 console.log(shopList);
 shopList.splice(1,1,"Bananas","Eggs");
 shopList.pop();
 console.log(shopList);
 console.log(shopList.sort());
 console.log(shopList.indexOf("Milk"));
 shopList.splice(1,0,"Carrrots","Lettuce");
 console.log(shopList);
 
 newList=["Juice","Pop"];
 console.log(newList[1]);	//Using index method
 RenewdList=shopList.concat(newList,newList);
 console.log(RenewdList);
 console.log(RenewdList.indexOf("Pop"));
 
 //-------------------------------------------------
 /* USED:
 Array
 push() method
 shift() method
 sort() method
indexOf() method 
concat() method
splice() method */
//------------------------------------------------------

//Multidimensinal arrays
let fullArr=[
	[1, 3, 5],
	[1, 8, 1],
	[1, 2, 6]
	];
let value1=fullArr[1][1];
let value2=fullArr[2][2];
console.log(value1,value2); //8 6

console.log(typeof fullArr); //Object 

let dog={					//OBJECTS with KEY:VALUE
	name: "goldy",
	weigth: "10kg",
	color: "black",
	breed:"Husky",
	age:3
};

dog.color="gray";		//Updating objects method1
dog["age"]="five";		//Updating objects and changing data type method2
console.log(dog);

//Objects in objects

let company={ companyName:"Candy Choco",
		activity:"Food",
		address:{
			street:"4th Street",
			zipcode:1321,			//No space should be given in key
			city:"NYC"
		},
		started:2011
};
console.log(company);

people={
	
};

