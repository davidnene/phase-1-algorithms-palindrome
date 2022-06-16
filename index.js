function isPalindrome(word) {
  // Write your algorithm here
  const checkFirstLast = word.split(''); //split characters to an array
  console.log(`First letter is ${checkFirstLast[0]} while last letter is ${checkFirstLast[checkFirstLast.length - 1]}`)
  
  return checkFirstLast.join('') === checkFirstLast.reverse().join('') //strict comparison
}

console.log(isPalindrome('hannah'))
/* 
  Add your pseudocode here
  functiom palindrome takes one arguement
  checks whether first character strictly equals last character
  returns true for strict equality and false if not equal
*/

/*
  Add written explanation of your solution here
  - First step is to find means of extracting the first character and last character of a word
  - One way to do this is to use the .split inbuilt function which will split the characters
  - and return an array
  - We then extract character its index ie array[0]
  - Then we extract the last character by checking the array length and subtracting one to
  - capture its index since indices count from zer0 ie array[array.length - 1]
  - We then check for strict comparison of the two
  - array[0] === [array.length - 1] ?
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

