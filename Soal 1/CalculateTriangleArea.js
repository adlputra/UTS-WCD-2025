
function findThirdAngle(angle1, angle2) {
    // find thirdangle
    let angle3 = 180 - (angle1 + angle2);
    return angle3;}

// angles a,b
let angle1 = 80;
let angle2 = 35;

// calculate the third angle
let thirdAngle = findThirdAngle(angle1, angle2);

// result
console.log("The third angle of the triangle is: " + thirdAngle);