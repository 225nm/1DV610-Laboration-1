/**
 * Laboration 1 - Hello World
 *
 * @author Erik Björnholm <eb225nm@student.lnu.se>
 */

/**
 * Prints the users name to the console.
 */
function helloUser() {
  const name = process.argv[2];

  if (name === null || name === undefined) {
    console.log("You need to write a name");
  } else {
    console.log("Hello " + name);
  }
}

// Calls the function. Use "npm start <name>" to select name.
helloUser();
