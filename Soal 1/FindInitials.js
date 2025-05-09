function getInitials(name) {
    // the name into an array of words
    let nameParts = name.split(" ");
    
    // initial
    let initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
    
    return initials;
}

// result
let name = "Adli Putra"; // Replace with your name
let initials = getInitials(name);
console.log(initials);