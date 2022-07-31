// Assignment Code
var generateBtn = document.querySelector("#generate");
//holds user data
function userResponse() {
  //prompts and confirms
  var passwordLength = window.prompt(
    "How long do you want your password to be? Choose between 8-128 characters.",
    8
  );

  var useLowerCaseCharacters = window.confirm(
    "Do you want lowercase letters in your password?"
  );

  var useUpperCaseCharacters = window.confirm(
    "Do you want uppercase letters in your password?"
  );

  var useNumbers = window.confirm("Do you want numbers in your password?");

  var useSpecialCharacters = window.confirm(
    "Do you want special characters in your password?"
  );

  return {
    length: passwordLength,
    lowercase: useLowerCaseCharacters,
    uppercase: useUpperCaseCharacters,
    numbers: useNumbers,
    special: useSpecialCharacters,
  };
}

//generates user password based upon data that is passed
function generatePassword() {
  var promptData = userResponse();
  console.log(promptData);
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
