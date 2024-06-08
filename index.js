#! /usr/bin/env node
// Making a simple OOP Based Personality Testing App.
import inquirer from "inquirer";
import chalk from "chalk"; // Import chalk for styling console output
// Defining the PersonalityTest class
class PersonalityTest {
    name; // Private property to store the user's name
    personalityType; // Private property to store the determined personality type
    constructor() {
        this.name = ""; // Initializing the 'name' property with an empty string
        this.personalityType = ""; // Initializing the 'personalityType' property with an empty string
    }
    // Method to start the test, marked as public so it can be called from outside the class
    async startTest() {
        this.displayTitleMessage(); // Displaying the title message
        await this.askName(); // Calling the askName method and wait for it to complete
        await this.askQuestion(); // Calling the askQuestion method and wait for it to complete
        this.showResult(); // Calling the showResult method to display the final result
    }
    // Private method to display the title message
    displayTitleMessage() {
        console.log(chalk.yellow.bold("=================================="));
        console.log(chalk.yellow.bold("OOP Based Personality Testing App"));
        console.log(chalk.yellow.bold("=================================="));
    }
    // Private method to ask the user's name so it can be called only inside the class
    async askName() {
        const response = await inquirer.prompt({
            type: "input", // Type of input expected is a string
            name: "name", // Name of the response key
            message: "What is your name:", // Message to display to the user
        });
        this.name = response.name; // Storing the user's input (name) in the 'name' property
        console.log(chalk.blue("----------------------------------")); // Separator line
        console.log(chalk.green(`Hello, ${this.name}!`)); // Greeting the user with their name
        console.log(chalk.blue("----------------------------------")); // Separator line
    }
    // Private method to ask personality-related questions
    async askQuestion() {
        const response = await inquirer.prompt({
            type: "list", // Type of input expected is a list (multiple choice)
            name: "personalityQuestion", // Name of the response key
            message: "Choose the statement that best describes you:", // The message to display to the user
            choices: [
                { name: "I like to tell people things.", value: "Extrovert" },
                { name: "I like to keep things to myself.", value: "Introvert" },
                {
                    name: "I find a balance between telling and keeping things.",
                    value: "Ambivert",
                },
                { name: "I enjoy thinking deeply about things.", value: "Thinker" },
                { name: "I make decisions based on my feelings.", value: "Feeler" },
            ],
        });
        this.personalityType = response.personalityQuestion; // Storing the user's choice (personality type) in the 'personalityType' property
        console.log(chalk.blue("----------------------------------")); // Separator line
        console.log(chalk.green(`You have selected: ${response.personalityQuestion}`)); // Showing the selected statement
        console.log(chalk.blue("----------------------------------")); // Separator line
    }
    // Private method to show the final result
    showResult() {
        console.log(chalk.blue("----------------------------------")); // Separator line
        console.log(chalk.bgMagenta.white.bold(`Your Name is: ${this.name} and your personality type is: ${this.personalityType}`)); // Displaying the user's name and personality type with styling
        console.log(chalk.blue("----------------------------------")); // Separator line
    }
}
// Creating an instance of the PersonalityTest class and start the test
const test = new PersonalityTest(); // Instantiating the PersonalityTest class
test.startTest(); // Calling the startTest method to initiate the test
