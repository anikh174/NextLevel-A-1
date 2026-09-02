// Write a function getDayType that takes a day name and returns:

// Input day	Returns
// Friday, Saturday	"Weekend"
// Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
// anything else	"Invalid Day"
// You must solve this with switch case, not with if / else.

// It must also work when the student enters the day in any letter case:

// Call	Returns
// getDayType("Friday")	"Weekend"
// getDayType("friday")	"Weekend"
// getDayType("MONDAY")	"Working Day"
// getDayType("Bandarban")	"Invalid Day"
// Hint: two case lines can share one result if you do not put break between them. And a string method can fix the letter case before the switch starts.

function getDayType(data){
    const value = data.toLowerCase();
    switch(value){
        case "friday":
        case "saturday":
        return "Weekend";
        break;

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        return "Work Day";
        break;

        default:
        return "Invalid Day";
    }
}
console.log(getDayType("Friday"))