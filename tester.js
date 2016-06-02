var Test = {
  // Key Properties
  passes: 0,
  fails: 0,
  errors: 0,
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
    this.passes = this.fails = this.errors = 0;
    var output = "<div id='console_" + uniqId + "' style='color:white;background-color:black;padding:10px;font-family:monospace'>";
    output += "<strong>" + msg + "</strong>";
    output += "<div id='describe_" + uniqId + "' style='margin-left:20px'>";
    var start = new Date().getTime();
    try {
      fn();
    } catch (e) {
      this.errors++;
      output += "<span style='color:red'>" + e + "</span>";
    }
    var dur = new Date().getTime() - start;
    output += "</div>";
    output += "<hr />";
    output += "<span style='color:lime'>" + this.passes + " Passes</span><br />";
    output += "<span style='color:red'>" + this.fails + " Fails</span><br />";
    output += "<span style='color:red'>" + this.errors + " Errors</span><br />";
    output += "Process took " + dur + "ms to complete<br />"
    output += "</div>";
    this.write(output + "<br />");
    document.getElementById("console_" + uniqId).style.border = "5px solid " + (this.passes > 0 && this.fails === 0 && this.errors === 0 ? "lime" : "red");
  }
};
