const Conf = require("conf");
const readline = require("readline");
const fs = require("fs");
const { exec } = require("child_process");

const config = new Conf();

function setDefault(newDefault) {
  let doesExist = fs.existsSync(newDefault);
  if (doesExist) {
    try {
      config.set("defaultLocation", newDefault);
      console.log("Default directory is now  " + newDefault);
      process.exit(0);
    } catch (err) {
      console.log(err);
      process.exit(0);
    }
  } else {
    console.log("path is not valid. Check path is valid and try again");
  }
}

module.exports = setDefault;
