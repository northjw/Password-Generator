// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ======= vars definition ======
// Array of special characters to be included in password
var specialCharacters = [

  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];
// Array of UPPERCASE characters to be included in password

var upperCaseCharacters = [

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
  "O",
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
// Array of UPPERCASE characters to be included in password

var lowerCaseCharacters = [

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
  "o",
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

// Array of numeric characters to be included in password

var lowerCaseCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

];
var totalCharacters = [];

var confirmUppercase = " ";
var confirmLowercase = " ";
var confirmNumbers = " ";
var confirmSpecial = " ";
var characterCount = " ";



// Prompt will pop-up to ask how many characters the user would like in their password-->
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Must be between 8 - 128 characters"));

 // Loop if answer is outside the password criteria-->
  while(confirmLength <= 8 || confirmLength >= 128) {
    // this message will pop up if they entered a number <8 or >128 -->
      alert("Password length must be between 8-128 characters, re-enter amount of characters");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // recive alert of how many charactes the user will have in your password --> 
      alert(`Your password will have ${confirmLength} characters`);
