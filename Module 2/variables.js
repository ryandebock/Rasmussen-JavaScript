// Get user's first name and display welcome message
let Fname = prompt("Please enter your first name:");
alert("Welcome, " + Fname + "!");

// Create a constant for Pi with 7 significant digits
const piValue = 3.1415926;

// Get user's favorite number
let myFavNum = prompt("What is your favorite number?");

// Convert the input string to a number for calculation
myFavNum = Number(myFavNum);

// Calculate the area of a circle where r is the user's favorite number
let myArea = piValue * (myFavNum * myFavNum);

// Display all variables with descriptions
document.write("<h2>Results</h2>");
document.write("<p><strong>First Name:</strong> " + Fname + "</p>");
document.write("<p><strong>Value of Pi:</strong> " + piValue + "</p>");
document.write("<p><strong>Your Favorite Number:</strong> " + myFavNum + "</p>");

// Display the complete message
document.write("<hr>");
document.write("<p>Hello " + Fname + ", you entered " + myFavNum + 
    " as your favorite number.<br><br>If that was the radius of a circle, " 
    + "the circle's area would be " + myArea + ".</p>");
