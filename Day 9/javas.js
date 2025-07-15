num1=parseFloat(prompt("Enter num 1"));
num2=parseFloat(prompt("Enter num 2"));
num3=parseFloat(prompt("Enter num 3"));
if((num1>num2)&&(num1>num3))//90 110 30 -90g
{
	alert(`${num1} is greatest`);
}
else if ((num2>num1&&num2>num3))
{
	alert(`${num2} is greatest`);
}
else if ((num3>num1&&num3>num2))
{
	alert(`${num3} is greatest`);
}
else{
	alert(`INVALID INPUT`);
}
