var intervalID;
var nations = data;
var colours = ["#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00"];
var TIME = 8000;


window.onload = function() {
  loadHidden();
  transition();
  changeColours();
  intervalID = setInterval(function (){ 
    main(); }, TIME);

};

function changeColours() {
  var randomColour = colours[Math.floor(Math.random()*(colours.length))];
  if(randomColour == document.body.style.background){
    changeColours();
  }else{
    document.body.style.background = randomColour;
  }
}

function transition(){
  var y = document.getElementsByClassName("y");
  var x = document.getElementsByClassName("x");

  for (var i = y.length - 1; i >= 0; i--) {
    y[i].classList.toggle('hidden');
    x[i].classList.toggle('hidden');     
  }
}
function getNation() {
 return nations[Math.floor(Math.random()*(nations.length))];
}

function loadHidden() {
  var hiddenEls = document.getElementsByClassName("hidden");
  var randomNumber = Math.floor(Math.random()*(nations.length));
  var test = getNation();

  var flag = document.getElementById("flag")
  // console.log(flag)
   // flag.innerHTML = "<img src="+nations[randomNumber].flag+" >"
   flag.style.backgroundImage = "url("+nations[randomNumber].flag+")";

   // var row = document.getElementsByClassName("row")[0]
   // console.log(row)
   // row.style.backgroundImage = "url("+nations[randomNumber].flag+")";
   
  for (var i = hiddenEls.length - 1; i >= 0; i--) {
    if(hiddenEls[i].classList.contains("nation")){ hiddenEls[i].innerHTML = nations[randomNumber].nativeName; }
    if(hiddenEls[i].classList.contains("engNation")){ hiddenEls[i].innerHTML = nations[randomNumber].name; }
    if(hiddenEls[i].classList.contains("capital")){ hiddenEls[i].innerHTML = nations[randomNumber].capital; }
    if(hiddenEls[i].classList.contains("pop")){ hiddenEls[i].innerHTML = nations[randomNumber].population.toLocaleString(); }
    if(hiddenEls[i].classList.contains("lang")){ 
      var langList = "";
      for (var j = 0; j < nations[randomNumber].languages.length; j++) {
        langList += 
        '<li>'+nations[randomNumber].languages[j].nativeName+' | <i>'+nations[randomNumber].languages[j].name+'</i></li>';
      }
      hiddenEls[i].innerHTML = langList;
    }
  }
 
}

function main() {
  loadHidden();
  changeColours();
  transition();
}

