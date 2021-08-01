const Conf = require("conf");
const readline = require("readline");
const fs = require("fs");
const { exec } = require("child_process");

const config = new Conf();

function setEdit(editor) {
  let newEditor = editor;

  switch (newEditor) {
    case "code":
      config.set("editor", newEditor);
      console.log(
        "Setting to VS code - Using 'code' as prefix. Not set this? See https://code.visualstudio.com/docs/setup/mac"
      );
      process.exit(0);
    case "subl":
      config.set("editor", newEditor);
      console.log(
        "Setting to VS sublime text - Using 'subl' as prefix. Not set this? See https://stackoverflow.com/questions/36718495/how-to-open-files-with-sublime-text-3-from-terminal"
      );
      process.exit(0);

    case "atom":
      config.set("editor", newEditor);
      console.log(
        "Setting to atom- Using 'atom' as prefix. Not set this? See https://stackoverflow.com/questions/36718495/how-to-open-files-with-sublime-text-3-from-terminal"
      );
      process.exit(0);

    default:
      console.log("Please choose from code, subl or atom");
      process.exit(0);
  }
}

module.exports = setEdit;
