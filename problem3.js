// Write a function validateUsername that takes a username and checks it against these rules, in this order:

// Shorter than 4 characters → return "Too Short"
// Contains a space → return "No Space Allowed"
// Contains the word admin anywhere, in any letter case → return "Reserved Word"
// Otherwise → return "Available"
// The order matters. Look at the third example carefully.

// Call	Returns	Why
// validateUsername("rahim123")	"Available"	passes every rule
// validateUsername("ab")	"Too Short"	only 2 characters
// validateUsername("a b")	"Too Short"	it has a space, but the length rule is checked first
// validateUsername("abcd")	"Available"	exactly 4 is allowed
// validateUsername("rahim islam")	"No Space Allowed"	
// validateUsername("superadmin99")	"Reserved Word"	admin is in the middle
// validateUsername("Admin_Rahim")	"Reserved Word"	capital A must also be caught
// Hint: .length, .includes(), and .toLowerCase().

function validateUsername(data){
    let value = data.toLowerCase();
    if(value.length < 4){
        return "Too Short"
    }
    else if(value.includes(" ")){
        return "No Space Allowed"
    }
    else if(value.includes("admin")){
        return "Reserved Word"
    }
    else{
        return "Available"
    }   
}
console.log(validateUsername("adminh"))