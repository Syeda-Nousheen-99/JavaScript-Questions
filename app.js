/* (1)Task Title: Number Sorting

Description:
Create a JavaScript function that takes an array of numbers as input and returns a sorted array in ascending order without using the built-in sorting methods (such as Array.sort()).
*/

const sortArray = (array) =>{
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const sort = array[j];
                array[j] = array[j + 1];
                array[j + 1] = sort;
            }
        }
    }
    return array;
}

const unsortedArray = [22, 2, 1, 40, 30];
const sortedArray = sortArray(unsortedArray);
console.log(sortedArray); 

/*(2)Task Title: Prime Number Checker

Description:
Create a web application that checks whether a given number is a prime number or not. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

const isPrime =(num) =>{
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

console.log(isPrime(22));
console.log(isPrime(12));
console.log(isPrime(3));
console.log(isPrime(7));

/*(3)Task Title: Palindrome Checker

Description:
Create a JavaScript function named isPalindrome that takes a string as input and determines whether it is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
*/

const isPalindrome =(str) =>{
    let reversed = str.split("").reverse().join("");
    return reversed === str
};
console.log(isPalindrome("lool"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("fool"));
console.log(isPalindrome("hello"));

/*(4)Task Title : Sum of Array Elements

Description:
Create a JavaScript function that takes an array of numbers as input and returns the sum of all the elements in the array.
*/

const sumArray = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 9, 12];
console.log(sumArray(numbers)); 

/*(5)Task Title : Factorial Calculator

Description:
Write a JavaScript function that calculates the factorial of a given non-negative integer. The factorial of a number is the product of all positive integers less than or equal to that number.
*/

const factorial = (n) =>{
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
};

console.log(factorial(5));
console.log(factorial(0)); 
console.log(factorial(9)); 

/*(6)Task Title : Reverse String

Description:
Implement a JavaScript function that takes a string as input and returns a new string with the characters reversed. For example, if the input is "hello", the output should be "olleh".
*/

const reverseString =(str) =>{
    return str.split('').reverse().join('');
}

let inputStr = 'hello';
console.log(reverseString(inputStr));

/*(7)Task Title : Vowel Counter

Description:
Create a JavaScript function that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string.
*/

const countVowel = (str) =>{
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowel('Hello World'));
console.log(countVowel('Syeda Nousheen'));