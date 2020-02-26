
str = window.prompt("Entre une question ", "");
last = str.slice(-1);
regex = /Fortnite/g;
found = str.match(regex);


if (last == "?"){
  console.log("Ouais Ouais..");
}else if (found != null){
  console.log("On s' fait une partie soum-soum ?");
}else if (str.length == 0) {
  console.log("t'es en PLS ?");
} else {
  console.log("balek")
}