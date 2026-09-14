// pb-1 ans
function describeValue(value) {
  const type = typeof value;
  const values = value ? "truthy" : "falsy";
  return `${type} | ${values}`;
}

// pb-2 ans
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
        return "Working Day";
        break;

        default:
        return "Invalid Day";
    }
}

// pb-3 ans
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

// pb-5 ans
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};