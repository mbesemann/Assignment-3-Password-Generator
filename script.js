// Bootstrap slider found here: https://seiyria.com/bootstrap-slider/#example-6
var slider = new Slider("#passwordLength");
slider.on("slide", function() {
  writePassword();
});

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#passwordLength");
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");

var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var allChars = "";
  var outputPassword = "";
  if(lowercase.checked)
    allChars += letters;
  if(uppercase.checked)
    allChars += letters.toUpperCase();
  if(numeric.checked)
    allChars += numbers;
  if(special.checked)
    allChars += specialChars;

  if(allChars != "")
    for (let intChar=0; intChar<passwordLength.value; intChar++) {
      outputPassword += allChars[getRandomInt(allChars.length-1)];
    }
  return outputPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
lowercase.addEventListener("change", writePassword);
uppercase.addEventListener("change", writePassword);
numeric.addEventListener("change", writePassword);
special.addEventListener("change", writePassword);