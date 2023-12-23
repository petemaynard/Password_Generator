// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button  (MOVED FROM BOTTOM)
generateBtn.addEventListener("click", writePassword);

// Random number generator
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// ***************************************
// Let's get to work running this thing!!!
// ***************************************

function generatePassword() {

  // Create the list of characters that will be used in the password, as selected by user
  function create_array(x, y) {
    for (var i = x; i <= y; i++) {
      final_array += String.fromCharCode(i);
    }
  }

  // Ask the questions
  function get_length() {
    pw_length = prompt("How many characters in your password?  Must be at least 8 and no more than 128.");
  }
  function four_opts() {
    use_lc = confirm("Click OK to include lowercase letters in your password, Cancel to not include.");
    use_uc = confirm("Click OK to include uppercase letters in your password, Cancel to not include.");
    use_nums = confirm("Click OK to include numbers, Cancel to not include.");
    use_special = confirm("Click OK to include special characters, Cancel to not include.");
  }

  // List of variables
  var pw_length = 0;       // Length of the password
  var use_lc = false;      // Use lowercase?
  var use_uc = false;      // Use uppercase?
  var use_nums = false;    // Use numbers?
  var use_special = false; // Use special characters?

  // Arrays
  var lc = [97, 122];
  var uc = [65, 90];
  var num = [48, 57];
  var spec = [33, 41];
  var final_array = [];
  var final_pw = [];

  // User must give valid length for password and must be a number
  while (isNaN(pw_length) || pw_length < 8 || pw_length > 128) {
    get_length();
  }
  // User must answer at least one question to the positive
  while (use_lc == false && use_uc == false && use_nums == false && use_special == false) {
    alert("Four choices follow.  You must answer at least one to the positive.");
    four_opts();
  }

  // Create the array of selected characters
  if (use_lc == true) {
    create_array(lc[0], lc[1])
  }
  if (use_uc == true) {
    create_array(uc[0], uc[1]);
  }
  if (use_nums == true) {
    create_array(num[0], num[1]);
  }
  if (use_special == true) {
    create_array(spec[0], spec[1]);
  }

  // By now we should have the final array of characters to choose from for the final password.
  // Open the console log to confirm correct characters are included in array.
  console.log("The full array used is : " + final_array);

  // Get the number of elements in the array
  var elem_count = final_array.length - 1;

  // Use random number generator to select items in array.
  for (var i = 0; i < pw_length; i++) {
    final_pw += final_array[random(0, elem_count)];
  }

  //console.log("pass_final is " + final_pw);

  return final_pw;
}  // End of generate_password function

