#! /usr/bin/env node

const { program } = require('commander')
// const list = require("./commands/list");
const init = require('./commands/init')

program
  .command("init")
  .description("setup directory for adding test plans")
  .action(init);

// program.command("list").description("List all the TODO tasks").action(list);

program.parse();
