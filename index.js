#! /usr/bin/env node

const { program } = require("commander");
const init = require("./commands/init");
const newPlan = require("./commands/newPlan");
const latest = require("./commands/latest");
const reset = require("./commands/reset");
const setDefault = require("./commands/setDefault");
const Conf = require("conf");
const chalk = require("chalk");

const config = new Conf();

// console.log(
//   "\n\n" +
//     chalk.black.bgYellow.bold(
//       "default location is " + config.get("defaultLocation")
//     ) +
//     "\n\n" +
//     chalk.black.bgYellow.bold(
//       "current ticket is " + config.get("currentTicket")
//     ) +
//     "\n\n"
// );

program
  .command("init")
  .description("Setup directory and Git repo for adding test plans")
  .action(init);

program
  .command("new <ticket>")
  .description("Create new tPlan for a ticket")
  .action(newPlan);

program
  .command("latest")
  .description("Open the latest ticket (if exists) ")
  .action(latest);

program
  .command("reset")
  .description("reset the default directory for test plans")
  .action(reset);

program
  .command("setdefault <setDefault>")
  .description("set the default directory for tPlan")
  .action(setDefault);

program.parse();
