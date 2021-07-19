const Conf = require("conf");
const readline = require("readline");

const config = new Conf();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reset(ticket) {
  rl.question("Are you sure? (y/n): ", (answer) => {
    answer === "y"
      ? (console.log(
          "defaults reset. Run `tplan init` to create a new test plan directory"
        ),
        config.delete("currentTicket"),
        config.delete("defaultLocation"),
        rl.close())
      : rl.close();
  });
}

module.exports = reset;
