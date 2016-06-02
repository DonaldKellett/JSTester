var Test = Object.freeze({
  // Test Output Method
  write: function (output) {
    document.getElementsByTagName("body")[0].innerHTML += output;
  },
  // Random Output Method
  randomNumber: function () {
    return ~~(101 * Math.random());
  },
  randomToken: function (length) {
    length = length || 10;
    var token = "";
    for (var i = 0; i < length; i++) {
      token += "abcdefghijklmnopqrstuvwxyz0123456789".split("")[~~(36 * Math.random())];
    }
    return token;
  },
  // Spec Methods
  describe: function (msg, fn) {
    var uniqId = this.randomToken();
    msg = msg || "The code to be tested";
    this.write("<div id='console_" + uniqId + "' style='color:white;background-color:black;padding:10px;font-family:monospace'>" + "<strong>" + msg + "</strong>" + "<div id='describe_" + uniqId + "' style='margin-left:20px'>" + "PLACEHOLDER - FILL THIS IN LATER" + "</div>" + "</div>");
  }
});
