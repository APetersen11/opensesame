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

  //begin character window prompts
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

  // get data from prompts
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

  //account for no characters chosen
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

  //create arrays of available characters
  var lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
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

  // create empty array to accept responses
  var availableCharacters = [];

  // set response conditions
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

  //set array to pick random characters from the random array
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
