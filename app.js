"use strict";
/*fizzbuzz*/
for(let i = 1; i < 101; i ++)
{
	if (i % 3 === 0&&i % 5 === 0)
	{
		fizzBuzz3and5();
	}
	else if(i % 3 === 0)
	{
		fizzBuzz3();
	}	
	else if(i % 5 === 0)
	{
		fizzBuzz5();
	}
	else
	{
		printI(i);
	}
}
function fizzBuzz3and5()
{
	console.log("fizzbuzz")
}
function fizzBuzz3()
{
	console.log("fizz");
}
function fizzBuzz5()
{
	console.log("buzz");
}
function printI(i)
{
	console.log(i);
}/*end fizzbuzz*/

/*Reverse a string*/
let stringPrompt = prompt("Please type in any String");

function reverseString(str)
{
	return str.split("").reverse().join("");
}

console.log(reverseString(stringPrompt));
/*end reverse a string*/

/*capitalize letter*/
let sentencePrompt = prompt("Please type in any sentance without capitalization");
function capitalizeFirstLetter(str)
{
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalizeFirstLetter(sentencePrompt));
/*end capitalize letter*/

/*compress a string of characters*/
let compressPrompt = prompt("Please type in a string of multiple characters; ex: aaabbbbcc");
function compressString(str)
{
	let output = '';
	let count = 0;
	for (let i = 0; i < str.length; i++){
		count++;
		if(str[i] != str[i+1]){
			output += count + str[i];
			count = 0;
		}
}
return output;
}
console.log("original string: " + compressPrompt);
console.log(compressString(compressPrompt));
/*end compression*/

/*palindrome*/
let palindromePrompt = prompt("Please enter a palindome, a word that reads the same forwards as backwards");
let palindromePromptReversed = reverseString(palindromePrompt);
if (palindromePromptReversed === palindromePrompt)
{
	console.log("nice! " + palindromePrompt + " is a correct palindrome");
}
else
{
	console.log("sorry, " + palindromePrompt + "is not a palindrome");
}
/*end palindrome*/

let happyPrompt = prompt("Please enter a number to test if it is happy", 0);
let valueNew = 0;
console.log(parseInt(happyPrompt));
function happyNumberTest(value)
{
	let valueSplit = value.toString().split("").map(function(t){return parseInt(t)});
	valueNew = 0;
	for(let i = 0; i < valueSplit.length; i++)
	{		
		let valueI = (valueSplit[i]);
		let valueISquared = (valueI * valueI);
		valueNew = valueNew + valueISquared;
	}
	console.log(valueNew);
	return valueNew;
}

	valueNew = happyNumberTest(happyPrompt);


		while((valueNew!==1)||(valueNew!==happyPrompt))
		{
		if (happyPrompt === valueNew)
		{
		notHappy(happyPrompt);
		break;
		}
		else if (valueNew === 1)
		{
		happy(happyPrompt);
		break;
		}
		else
		{
		happyNumberTest(valueNew);
		}
		}


function notHappy(value)
{
	console.log(value + "is not happy.")
}
function happy(value)
{
	console.log(value + " is happy!")
}
/*end happy prompt*/


/*Prime Numbers*/
for (let i = 1; i < 100; i++)
{
	for(let j = 2; j < 100; j ++)
	{
		if(j === i)
		{
			j++;
		}
		if(((i%j)===0)&&(i < 100))
		{
			i++;
		}
	}
	if (i != 100)
	{
	printPrime(i);
}
}
function printPrime(value)
{
	console.log(value + " is a prime number.")
}
/*end prime numbers*/

/*fibonacci*/
let startFibonacciPrompt = prompt("Please enter a value to start a Fibonacci sequence with: ", 0);
let fibonacciArrayLength = prompt("How long would you like the fibonacci array to be", 0);
let startFibonacciPromptArray = new Array(parseInt(startFibonacciPrompt), parseInt(startFibonacciPrompt));
function fibonacciArray(fibonacciArray, length)
{
	if (startFibonacciPromptArray.length < length)
	{
		for(let i=2; i<length; i++)
		{
			startFibonacciPromptArray[i] = startFibonacciPromptArray[i-1] * startFibonacciPromptArray[i-2]
		}
	}
	console.log(startFibonacciPromptArray)
}
		fibonacciArray(startFibonacciPromptArray, fibonacciArrayLength);
/*end fibonacci*/		
