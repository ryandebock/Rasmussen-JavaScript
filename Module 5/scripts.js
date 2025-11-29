// Create a literal object for the dog
const myDog = {
    name: "Rover Dangerfield",
    species: "Dog",
    breed: "Basset Hound",
    gender: "Male",
    occupation: "Former Vegas Entertainer",
    mySound: "When I bark, I get no respect! I used to sound like a star in Vegas, now I just sound like another farm dog complaining about the cows."
};

// Create a constructor function for the dog object
function Dog(name, species, breed, gender, occupation, mySound, canTalk) {
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.gender = gender;
    this.occupation = occupation;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Add the myGreeting method to return the greeting text
    this.myGreeting = function() {
        return `My name is ${this.name}, and let me tell ya,
        when I bark, I get no respect! I used to be living it
        up in Vegas<br>- I'm talking room service, fine dining, and 
        all the tail a dog could dream of. Now, I'm stuck on this 
        <br>farm where the biggest excitement is watching a cow chew 
        it's cud. My life is rough I tell ya, real rough!`;
    };
}

const myDogConst = new Dog(
    "Rover",
    "Dog",
    "Basset Hound",
    "Male",
    "Former Vegas entertainer",
    "When I bark, I get no respect! I used to sound like a star in Vegas, now I just sound like another farm dog complaining about the cows!",
    true
); 

document.addEventListener("DOMContentLoaded", function() {
    // Populate object literal info
    const dogInfo = document.getElementById("dog-info");
    for (let key in myDog) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${key}:</strong> ${myDog[key]}`;
        dogInfo.appendChild(li);
    }

    // Populate constructor object greeting
    const greetingDiv = document.getElementById("dog-greeting");
    greetingDiv.innerHTML = `
        <div style="
            display: flex;
            gap: 20px;
            align-items: flex-start;
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;">
            <div style="flex: 0 0 300px;">
                <img src="/images/Rover_Dangerfield_Transparent.webp" 
                alt="Rover Dangerfield" 
                style="width: 100%; 
                height: auto; 
                border-radius: 5px;">
            </div>
            <div style="flex: 1;">
                <h3> Rover's Greeting:</h3>
                <p style="font-style: italic;
                          font-size: 16px; 
                          line-height: 1.6;">
                    ${myDogConst.myGreeting()}
                </p>
                <p><strong>Can talk:</strong>
                    ${myDogConst.canTalk ? "Yes!" : "No"}
                </p>
            </div>
        </div>`;
});