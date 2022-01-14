// Assignment Code
var generateBtn = document.querySelector("#generate");

// create function for gernerate passord
function generatePassword() {
 
  console.log("button clicked");
// 1. Prompt user with ps criteria
//    a. ps length 8-128
//    b. Lowercase, Uppercase, Special characters
var pslength = window.prompt('How many characters would you like your password to contain?');

//validate user prompt answer on character length
if( pslength === "" || pslength === null) {
  window.alert("must provide a valid answer");

  return generatePassword();
}

var psspecial = window.prompt('Click OK to confirm special characters');

var pslower = window.prompt('Click OK to confirm Lowercase letters');

var psupper = window.prompt('Click OK to confirm Uppercase letters');

// 2. Validate input
// 3. generate ps based on criteria


// 4. display generated ps on page



  return "Generated Password will show here"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
