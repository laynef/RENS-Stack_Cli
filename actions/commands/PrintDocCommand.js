var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {

    console.log("\n");
    console.log("RENS-Stack-Cli - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('├── make               ─ Create a new component');
    console.log('└── runs                ─ Verify that your stack works');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
