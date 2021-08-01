#! /usr/bin/env node

const { program } = require("commander");
const init = require("./commands/init");
const newPlan = require("./commands/newPlan");
const latest = require("./commands/latest");
const reset = require("./commands/reset");
const setDefault = require("./commands/setDefault");
const setEdit = require("./commands/setEditor");

const Conf = require("conf");

const config = new Conf();

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

program
  .command("seteditor <setEdit>")
  .description(
    "set the default text editor for tPlan -  options 'atom' 'code' 'subl'"
  )
  .action(setEdit);

program.parse();
