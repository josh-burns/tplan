const Conf = require("conf");
const { exec } = require("child_process");

const config = new Conf();

function latest() {
  const editor = config.get("editor");
  if (
    !config.get(
      "defaultLocation" || config.get("defaultLocation").includes("undefined")
    )
  ) {
    console.log(
      "It looks like you do not have a default directory. Please run `tplan init` and try again"
    );
    process.exit(0);
  }
  if (
    !config.get(
      "currentTicket" || config.get("currentTicket").includes("undefined")
    )
  ) {
    console.log(
      "It looks like you do not have a current ticket. Please run `tplan new` and try again"
    );
    process.exit(0);
  }
  let ticketPath = config.get("currentTicket");

  exec(editor + " " + ticketPath);
  process.exit(0);
}

module.exports = latest;
