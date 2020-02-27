result = window.prompt("Entre un nombre", "");
num = parseInt(result, 10);
res = num;

while(num > 1 )
{
  num--
  res = res * (num);
}

if (res == 0 ){
  console.log("Le résultat est : 1");
} else {
  console.log("Le résultat est :" + res);
}