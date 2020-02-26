result = window.prompt("Entre un nombre", "");
row = parseInt(result, 10);
let pos = 0;


for(let i=0; i<row; i++){
  var output = '';
  for(let e = 0; e < row - i ; e++)
  {
    output += " ";
    pos = e;
  }
  while(pos < row){
    output += "#"
    pos ++;
  }
  console.log(output)
} 
