const chalk = require("chalk");
const fs = require("fs");
let { render } = require("mustache");
const { exec } = require("child_process");
const template = `# Ticket     {{ticketName}}

### Start Date:     {{dateNow}}

### Test Plan:

- 

### Acceptance Criteria

-

### Additional Notes

### Artefacts
`;

const Conf = require("conf");
const config = new Conf();

function newPlan(ticket) {
  if (!config.get("defaultLocation")) {
    console.log(
      "It looks like you do not have a default location. Please run `tplan init` and try again"
    );
    process.exit(0);
  }

  let ticketDirectory = config.get("defaultLocation");
  let pathToCreateTicket = ticketDirectory + "/" + ticket;


  console.log(
    chalk.green(
      "\n\n" +
        "Creating ticket  " +
        chalk.black.bgYellow.bold(ticket) +
        "... " +
        "\n\n" +
        "in path " +
        pathToCreateTicket
    )
  );

  process.chdir(ticketDirectory);
  fs.mkdirSync(pathToCreateTicket, { recursive: true });
  process.chdir(pathToCreateTicket);

  let eventDateToUse = new Date().toDateString();

  let fields = {
    ticketName: ticket.new,
    dateNow: eventDateToUse,
  };

  let finalPath = pathToCreateTicket + "/" + ticket + ".md";
  let output = render(template, fields);
  fs.writeFileSync(finalPath, output);
  exec("code " + finalPath);
  config.set("currentTicket", finalPath);
  process.exit(0);
}

module.exports = newPlan;
