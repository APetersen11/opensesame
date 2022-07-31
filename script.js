// Assignment Code
var generateBtn = document.querySelector("#generate");
//holds user data
function userResponse() {
  //prompts and confirms
  var passwordLength = window.prompt(
    "How long do you want your password to be? Choose between 8-128 characters.",
    8
  );

//set password length parameters
  passwordLength = parseInt(passwordLength, 10);

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt(
      "Your password must be between 8 and 128 characters.",
      8
    );

    passwordLength = parseInt(passwordLength, 10);
  }

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
    passwordLength: passwordLength,
    lowercase: useLowerCaseCharacters,
    uppercase: useUpperCaseCharacters,
    numbers: useNumbers,
    special: useSpecialCharacters,
  };
}

//generates user password based upon data that is passed
function generatePassword() {
  var promptData = userResponse();

  while (
    !promptData.lowercase &&
    !promptData.uppercase &&
    !promptData.special &&
    !promptData.numbers
  ) {
    window.alert(
      "You must choose at least one character type. Please try again."
    );
    promptData = userResponse();
  }

  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F"];
  var specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var availableCharacters = [];

  if (promptData.lowercase === true) {
    availableCharacters = [].concat(availableCharacters, lowerCaseLetters);
  }

  if (promptData.uppercase === true) {
    availableCharacters = [].concat(availableCharacters, upperCaseLetters);
  }

  if (promptData.special === true) {
    availableCharacters = [].concat(availableCharacters, specialCharacters);
  }

  if (promptData.numbers === true) {
    availableCharacters = [].concat(availableCharacters, numbers);
  }

  var passwordCharacters = [];

  for (
    var passwordCharacter = 0;
    passwordCharacter < promptData.passwordLength;
    passwordCharacter++
  ) {
    //borrowed from https://stackoverflow.com/a/5915122/19326349
    var character =
      availableCharacters[
        Math.floor(Math.random() * availableCharacters.length)
      ];
    passwordCharacters.push(character);
  }
  return passwordCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
