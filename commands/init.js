const chalk = require("chalk");
const { exec } = require("child_process");
const fs = require("fs");
const readline = require("readline");

let shouldContinue = false;
let location;
let createGitRepoHere = false;
let pwd 

function init() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Create tPlan directory here? (y/n): ", (answer) => {
    answer == "y" ? (shouldContinue = true) : null;

    switch (shouldContinue) {
      case true:
        rl.question("Create git repo here? (y/n): ", (answer) => {
          answer == "y" ? (createGitRepoHere = true) : null;
        rl.question("Enter name of directory:  ", (answer) => {
          location = answer;

          console.log("Directory name:   " + chalk.green(location));
          console.log(
            "init repo here?:   " + chalk.black.bgYellow.bold(createGitRepoHere)
          );

          rl.question("Are you sure? (y/n)    ", (answer) => {
            answer == "y" ? runSetupProcess(location) : null;
            rl.close();
          });
        });
        });

        break;
      case false:
        console.log(
          "Please cd to the directory you wish to create your tPlan directory and run init again. "
        );

        rl.close();
        break;

      default:
        break;
    }
  });
}

function runSetupProcess(location) {
  let fullLocation = "./" + location;

  try {
    fs.mkdirSync("./" + location);
    process.chdir(location);
    createGitRepoHere ? exec("git init") : null;
        pwd = process.cwd();
    process.chdir("../");

    console.log("Default directory is " + pwd)
    console.log(chalk.green("\n\n") + "Done" + "\n\n");
    console.log(chalk.green("Created tPlan repo at: " + fullLocation + "\n\n"));
  } catch (error) {
    console.log(error);
  }
}

module.exports = init;
