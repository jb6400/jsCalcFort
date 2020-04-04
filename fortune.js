function fortune(name){
  var randomIndex = Math.floor( Math.random() * fortunes.length );
  var fortune = name + ", " + fortunes[randomIndex];
  return fortune;
}

function restyle(){
  var randomIndex = Math.floor( Math.random() * decoration.length );
  var randomColorR = Math.floor( Math.random() * 255 );
  var randomColorB = Math.floor( Math.random() * 255 );
  var randomSize = Math.floor( Math.random() * 50 );
  var output = document.getElementById("fortune-output");
  output.style.color = "rgb(" + randomColorR + ", 0," + randomColorB + ")";
  output.style.textDecoration = decoration[randomIndex];
  output.style.fontSize = randomSize + "px";
}

var decoration=["overline", "line-through", "underline"]

var fortunes=["a beautiful, smart, and loving person will be coming into your life.", "be careful! A dubious friend may be an enemy in camouflage.", "remember that a faithful friend is a strong defense.", "know that a feather in the hand is better than a bird in the air.", "remember that a fresh start will put you on your way.", "a friend asks only for your time not your money. Kick those gold-diggers off to the curb!", "a friend is a present you give yourself.", "a gambler not only will lose what he has, but also will lose what he doesn’t have. So don't gamble.", "a golden egg of opportunity will fall into your lap this month. Congrats!", "know that a good friendship is often more important than a passionate romance.", "it's a good time to finish up old tasks. So don't be a lazy bum.", "remember that a hunch is creativity trying to tell you something.", "a lifetime friend shall soon be made. Keep your eyes peeled", "a lifetime of happiness lies ahead of you.", "remember that a light heart carries you through all the hard times.", "a new perspective will come to you with the new year."];

btn = document.getElementById("fortune-button");

btn.addEventListener("click", function() {
  var input = document.getElementById("fortune-input").value;
  var output = fortune(input);
  document.getElementById("fortune-output").innerHTML = output;
  restyle();
  // console.log("uwu");
});
