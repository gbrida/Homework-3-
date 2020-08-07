// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
var options ={}
options.length = parseInt(
  prompt("How long do you want the password to be")
);
if (options.length < 8 options.length > 128) {
  alert("incorrect password length");
  return ("invalid perameters")
}

options.special= confirm("would you like to use special characters")
options.numerical = confirm("Would you like to use Numerical characters")
options.uppercase = confirm("would you like to use Uppercase characters")
options.lowercase = confirm("would you like to use Lowercase characters")
}

var password = ""
for (var i = 0; i < options.length; i++){
if(options.special){

}
if(options.numerical){

}
if(options.numerical){
  
}
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
