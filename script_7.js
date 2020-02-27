while(true){ 
let str = window.prompt("Entre une question ", "");
let last = str.slice(-1);
let regex = /Fortnite/g;
let regex2 = /^[^a-z]*$/g;
let caps = str.match(regex2);
let found = str.match(regex);


if (last == "?"){
  console.log("Ouais Ouais..");
}else if (str.length == 0){ 
  console.log("t'es en PLS ?");
}else if (found != null){
  console.log("On s' fait une partie soum-soum ?");
}else if (caps != null) {
  console.log("Pwa, calme-toi...");
} else {
  console.log("balek");
}
}