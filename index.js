function isPalindrome(word) {
  debugger;
  for (let i =0; i < word.length/2; i++){
    let j = word.length -i - 1;
    if(word[i] !== word[(j)]){
      return false;
    }
  }
  return true;
}


/* abba
a a
b b
 */


/* 
  compare first letter to last letter, moving in until middle letter

*/

/*
  Add written explanation of your solution here
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
