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
  }
});
