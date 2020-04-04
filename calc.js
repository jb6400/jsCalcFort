function halfNumber(x){
  return alert("half of " + x + " is " + (x/2));
}

btn = document.getElementById("half-button");

btn.addEventListener("click", function(){
  var input = document.getElementById("half-input").value;
  console.log(input);
  halfNumber(input);
});
