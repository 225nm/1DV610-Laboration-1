/**
 * Laboration 1 - Hello World
 *
 * @author Erik Björnholm <eb225nm@student.lnu.se>
 */
import chalk from "chalk";
const log = console.log;

// List of compliments.
const compliments = [
  "handsome",
  "beautiful",
  "amazing",
  "awesome",
  "charming",
  "elegant",
  "intelligent",
  "kind",
  "lovely",
  "thoughtful",
];

// Greets the user with a random compliment highlighted in pink.
function helloUser() {
  const name = process.argv[2];

  if (name === undefined) {
    log("You need to write a name");
  } else {
    const index = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[index];
    log("Hello " + name + ", you are " + chalk.bgMagenta(compliment) + " today!");
  }
}

// Calls the function. Use "npm start <name>" to select name.
helloUser();
