function getDateDifference(date1, date2) {
    // d1 d2
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    
    // difference in milliseconds
    let timeDifference = d2 - d1;
    
    // milliseconds to days
    let dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    
    return Math.abs(dayDifference); // Return the absolute difference
}

// solution
let date1 = "2024-03-19";
let date2 = "2024-03-21";

let difference = getDateDifference(date1, date2);
console.log("The difference between the dates is " + difference + " days.");