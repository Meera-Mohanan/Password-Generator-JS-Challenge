/*Assignment Code*/
//1. Prompt the user for the password criteria
//  a.Password length 8<128
//  b.Lower Case, Uppercase,numbers,special characters
//2. Validate the Input.
//3. Generate password
//4. Display the generated password

var generateBtn = document.querySelector("#generate");
var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharset = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numericCharset = "0123456789";

function generatePassword() {
  let passwordLength = prompt("Please enter number of characters your password should contain?");
  var numericPasswordLength = parseInt(passwordLength);
  if (passwordLength == null || passwordLength == "" || isNaN(numericPasswordLength)) {
    alert("Invalid input, please try again");
    return;
  } else if (numericPasswordLength < 8 || numericPasswordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  let availableCharset = "";

  if (confirm("Click OK to confirm using lowercase characters")) {
    availableCharset += lowercaseCharset;
  }

  if (confirm("Click OK to confirm using uppercase characters")) {
    availableCharset += uppercaseCharset;
  }
  if (confirm("Click OK to confirm using numeric characters")) {
    availableCharset += numericCharset;
  }
  if (confirm("Click OK to confirm using special characters")) {
    availableCharset += specialCharset;
  }

  if (availableCharset == "") {
    alert("Password should include some character type");
  }

  var password = "";

  let selectedCharacters = availableCharset.split("");

  for (let number = 0; number < numericPasswordLength; number++) {
    password += selectedCharacters[getRandomInt(availableCharset.length)];
  }

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
