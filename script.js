// Assignment Code
var generateBtn = document.querySelector("#generate");
//holds user data
function userResponse(){
//prompts and confirms
}
//generates user password based upon data that is passed
function generatePassword(){
var promptData = userResponse();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
