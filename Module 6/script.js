// Literal
const myDog = {
    name: "Rover Dangerfield",
    species: "Dog",
    breed: "Basset Hound",
    gender: "Male",
    occupation: "Former Vegas Entertainer",
    mySound: "When I bark, I get no respect! I used to sound like a star in Vegas, now I just sound like another farm dog complaining about the cows." 
};

// Constructor
function Dog(name, species, breed, gender, occupation, mySound, canTalk, greetingText, image) {
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.gender = gender;
    this.occupation = occupation;
    this.mySound = mySound;
    this.canTalk = canTalk;
    this.greetingText = greetingText;
    this.image = image;

    this.myGreeting = function () {
        const talkMessage = this.canTalk ? "I can talk!" : "I cannot talk";
        return `
            My name is ${this.name}. ${talkMessage}<br><br>
            ${this.greetingText}
        `;
    };
}

// Dog Objects
const myDogConst = new Dog(
    "Rover Dangerfield",
    "Dog",
    "Basset Hound",
    "Male",
    "Former Vegas Entertainer",
    "When I bark, I get no respect!",
    true,
    `Let me tell ya, when I bark, I get no respect! I used to be living it up in 
    Vegas — room service, fine dining, and all the tail a dog could dream of. Now 
    I'm stuck on this farm where the biggest excitement is watching a cow chew its 
    cud. My life is rough, I tell ya. Real rough!`, 
    "/images/Rover_Dangerfield_Transparent.webp"
);

const brian = new Dog(
    "Brian Griffin",
    "Dog",
    "Labrador Retriever",
    "Male",
    "Writer / Martini Enthusiast",
    "Hey, I'm Brian.",
    true,
    `I'm Brian Griffin — writer, intellectual, and occasional voice of reason. I 
    enjoy long walks, dry martinis, and pretending I'm above the chaos of the Griffin 
    household. Honestly, I'm just trying to get my novel published before Stewie builds 
    another time machine.`, 
    "/images/brian.webp"
);

const scooby = new Dog(
    "Scooby-Doo",
    "Dog",
    "Great Dane",
    "Male",
    "Mystery Solver",
    "Ruh-roh!",
    true,
    `Scooby-Dooby-Doo! Solving mysteries is hard work, especially when there are ghosts, 
    monsters, and no snacks in sight. But with the gang by my side — and a few Scooby Snacks — 
    I always find the courage to save the day.`, 
    "/images/scooby.webp"
);

// Store all dogs in one object for lookup
const allDogs = {
    Rover: myDogConst,
    Brian: brian,
    Scooby: scooby
};

// DOM Manipulation
document.addEventListener("DOMContentLoaded", function () {

    // Dropdown to select a dog
    const dogSelect = document.getElementById("dog-select");
    const selectedDogDiv = document.getElementById("selected-dog");

    dogSelect.addEventListener("change", function () {
        const choice = dogSelect.value;

        // Clear previous selection
        selectedDogDiv.innerHTML = "";

    if (choice && allDogs[choice]) {
        const chosenDog = allDogs[choice];

        selectedDogDiv.innerHTML = `
            <h2>Selected Dog: ${chosenDog.name}</h2>
            
            <div style="display: flex; gap: 20px; align-items: flex-start; margin-top: 10px;">
                <div style="flex: 0 0 250px;">
                    <img src="${chosenDog.image}"
                         alt="${chosenDog.name}"
                         style="width: 100%; height: auto; border-radius: 5px;">
                </div>

                <div style="flex: 1;">
                    <p>${chosenDog.myGreeting()}</p>
                    <ul>
                        <li><strong>Species:</strong> ${chosenDog.species}</li>
                        <li><strong>Breed:</strong> ${chosenDog.breed}</li>
                        <li><strong>Gender:</strong> ${chosenDog.gender}</li>
                        <li><strong>Occupation:</strong> ${chosenDog.occupation}</li>
                        <li><strong>Sound:</strong> ${chosenDog.mySound}</li>
                        <li><strong>Can Talk:</strong> ${chosenDog.canTalk ? "Yes" : "No"}</li>
                    </ul>
                </div>
            </div>
        `;
    } 
});
});

