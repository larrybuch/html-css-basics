$(function(){
  $('#game-board').click(changeColors)
});

var backgroundColors = ["black", "red", "green", "yellow", "blue", "orange", "pink"];

var changeColors = function() {
  var firstRandomNumber = Math.floor(Math.random() * colors.length);
  var secondRandomNumber = Math.floor(Math.random() * colors.length);
  $('#game-board h2').text(colors[firstRandomNumber]);
  $('#game-board h2').css({color: colors[secondRandomNumber]});
};