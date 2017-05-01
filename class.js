// Write a function to test whether a given input is a valid email address. For the purposes of this assessment, here is what makes a valid email: At least 
// one letter character at the beginning 
// All characters between the first character and the @ (if any) must be letters, numbers, or underscores 
// There must be an @ character (after the points listed just now) 
// After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen 
// The email must end with at least one set of a dot followed by one or more word characters. 
// The input must NOT be case-sensitive The function should return true or false.

function emailTest(email){
	var emailParts = email.split("@");
	if (emailParts[0].match(/[a-z]/i)){
		console.log("first letter")
		if( (emailParts[0].match(/[a-z,0-9,_]/gi)) === emailParts[0].split("")){
			console.log("first section")
		}return "before @ bad";
	} return "first leter bad";
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

emailTest("jw__ofiej381@sfjk.com");
emailTest("0jwofiej_381@sfjk.com");
emailTest("jwofiej381@sfjk.com");