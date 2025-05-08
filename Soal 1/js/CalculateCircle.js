// Calculate of circle

let radius = 5; // radius of the circle
function calculateCircleProperties(radius) {
    let diameter = 2 * radius; // Diameter is twice the radius
    let circumference = 2 * Math.PI * radius; // Circumference formula: 2 * π * radius
    let area = Math.PI * Math.pow(radius, 2); // Area formula: π * radius^2

     // 
  return {
    diameter: diameter,
    circumference: circumference,
    area: area
  };
}

//result
const circleProperties = calculateCircleProperties(radius);
console.log("Diameter: " + circleProperties.diameter);
console.log("Circumference: " + circleProperties.circumference);
console.log("Area: " + circleProperties.area);
