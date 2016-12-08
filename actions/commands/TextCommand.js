var TextCommand = function() {
  var whatYoudSay = function() {
    console.log("Your installation runs!");
  };

  return {
    handle: whatYoudSay
  }
}

module.exports = TextCommand;
