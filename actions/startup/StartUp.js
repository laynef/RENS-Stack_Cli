var TextCommand = require('../commands/TextCommand.js');
var PrintDocCommand = require('../commands/PrintDocCommand.js');
var CreateCommand = require('../commands/CreateCommand.js');
var CreatePage = require('../commands/CreatePage.js');
var CreateComponent = require('../commands/CreateComponent.js');
var CreateDirectory = require('../commands/CreateDirectory.js');

var StartUp = function(commandPattern, args, flags) {
  var commanderInCharge = function(mod) {
    var commander = new mod(...args);
    commander.handle(flags);
  };

  var execute = function() {
    switch (commandPattern) {
      case 'arr':
        commanderInCharge(TextCommand);
        break;
      case 'create':
        commanderInCharge(CreateCommand);
        break;
      case 'make':
        commanderInCharge(CreateComponent);
        break;      
      case 'page':
        commanderInCharge(CreatePage);
        break;
      default:
        commanderInCharge(PrintDocCommand);
    }
  };

  return {
    execute: execute
  }

};

module.exports = StartUp;
