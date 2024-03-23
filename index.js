#! /usr/bin/env node
import inquirer from "inquirer";
const randomNamber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answers.userGuessednumber === randomNamber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
;
