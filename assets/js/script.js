// Assignment Code
var generateBtn = document.querySelector("#generate");

// create set of optional characters for user
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "<", ">", "/", "?",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5","6", "7", "8", "9", "0"];

// create a set of questions for user password criteria
function userOptions () {
  var validChoice = true;
// add a parameter for length of password
    var pwLength = prompt("How long should your password be?"); {
      if(pwLength < 8 || pwLength > 128) {
        alert("Your password must be between 8 and 128 characters long.")
        return userOptions();
      }
      // ask user what they would like to include in password
      else {
        var specialPrompt = confirm("Do you want to include special characters?");
        var capitalPrompt = confirm("Do you want to include uppercase letters?");
        var lowerPrompt = confirm("Do you want to include lowercase letters?");
        var numbersPrompt = confirm("Do you want to inlcude numbers?");
      }
    }
    
    var promptResponses = {
      pwLength: pwLength,
      specialPrompt: specialPrompt,
      capitalPrompt: capitalPrompt,
      lowerPrompt: lowerPrompt,
      numbersPrompt: numbersPrompt
    };
    // Have user pick at least on option for password
    if ((!specialPrompt && !capitalPrompt && !lowerPrompt && !numbersPrompt)) {
      alert("You must at choose at least one character class!")

    }
      else {
        console.log(promptResponses);
        return promptResponses;
      }
    }

// This funtion grabs the answers from userOptions and arranges them into an array based on the choices picked
function generatePassword () {
  var options = userOptions();
  var passCharacters = [];
  var generatedPassword = "";
// use if and for loops to select random characters
  if(options.specialPrompt) {
    for (var x of special) {
      passCharacters.push(x);}
    }
  
  if (options.capitalPrompt) {
    for (var x of upperCase) {
      passCharacters.push(x);}
    }

  if (options.lowerPrompt) {
    for (var x of lowerCase) {
      passCharacters.push(x);}
     }
  if (options.numbersPrompt) {
    for (var x of numbers) {
      passCharacters.push(x);}
    }
  
  for (var x = 0; x < options.pwLength; x++) {
    generatedPassword = generatedPassword + passCharacters[Math.floor(Math.random() * passCharacters.length)];
  }

  return generatedPassword;

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
