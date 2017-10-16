$(function() {
  var last = function(last) {
    var lastOne = last.charAt(last.length-1);
    return lastOne
  }
  var first = function(first) {
    var firstOne = first.charAt(0);
    return firstOne
  }

  var sentence = prompt("Please write a sentence, yo!");

  var lastletter = last(sentence);
  var firstletter = first(sentence);
  alert(firstletter + " " + lastletter);
});
