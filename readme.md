# tPlan

A simple CLI tool for generating test plan documents.

```
Usage: tplan [options] [command]

Options:
  -h, --help               display help for command

Commands:
  init                     Setup directory and Git repo for adding test plans
  new <ticket>             Create new tPlan for a ticket
  latest                   Open the latest ticket (if exists)
  reset                    reset the default directory for test plans
  setdefault <setDefault>  set the default directory for tPlan
  seteditor <setEdit>      set the default text editor for tPlan -  options 'atom' 'code' 'subl'
  help [command]           display help for command
```

TODO

- init - done!

  - Set up the working directory for new test plans to go in
  - Init a git repo in the chosen directory

- new - Done!

  - Create a new markdown file to write a test plan in
  - Give config options for Ticket number, type of test, etc
  - Creates the doc with the parameters, ticket in the filename
  - adds date to file
  - Set 'latest' ticket, to allow easy retrieval of files

- latest - Done!

  - Open the latest ticket, that was set in the 'new' step

- Reset - Done!

  - Resets the default folder, and current ticket

- SetDefault - Done!

  - Set default folder

- SetCurrentTicket

  - Set current ticket

- Set default text editor

  - Sets the editor from vscode, atom, subl or vim

- list
  - List all current test plans
  - Is it really needed?
- Delete?

  - Maybe not needed but handle deletion of files

- Search

  - Make it easy to find a ticket's writeup
  - Maybe make it `tplan open ...`

- Review
  - On created writeups, in the pass/fail section, could run through criteria and mark with a pass/fail on each one with a `p` and `f`
