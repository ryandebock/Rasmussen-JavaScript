// For loop that counts from 0 to 10
document.write('<h2>For Loop Declaring Odd or Even</h2>')
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        document.write(`<p>Count ${i} is even.</p>`);
    } else {
        document.write(`<p>Count ${i} is odd.</p>`);
    };
};

// Get user input
let myNum;
while (true) {
    myNum = prompt("Enter a number between 5 and 20: ");
    if (myNum > 5 && myNum < 20) {
        break;
    };
};

// Do While loop to display counter until it equals myNum
document.write('<h2>Counter up to myNum</h2>')
let counter = 0;
do {
    document.write(`<p style="display: inline;">${counter} </p>`)
    counter++;
} while (counter <= myNum);

// Store subjects in an array
const subjects = ['Accounting', 'Algebra', 'Programming', 'Art', 'Data Analytics'];

// Display the array values in a readable format using foreach()
document.write('<h2>Display Array in readable format</h2>')
subjects.forEach(function(subjects) {
    document.write(`<p>${subjects}</p>`);
});

// Display array values separated by commas using one statement
document.write('<h2>Display array values separated by a comment in one statement</h2>')
document.write(subjects.join(", "));


