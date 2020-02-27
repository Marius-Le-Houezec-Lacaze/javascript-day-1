
const acid =[  
  {name: 'Sérine', ac: ["UCU","UCC","UCA","UCG","AGU","AGC"]},
  {name: 'Proline', ac: ["CCU","CCC","CCA","CCG"]},
  {name: 'Leucine', ac: ["UUA","UUG"]},
  {name: 'Phénylalanine', ac: ["UU","UUC"]},
  {name: 'Arginine', ac: ["CGU","CGC","CGA","CGG","AGA","AGG"]},
  {name: 'Tyrosine', ac: ["UAU","UAC"]}

]

function convert(str){ 
let output = "";
let code = str.match(/.{1,3}/g);;
code.forEach((code, index) => {
  acid.forEach((item, index) => {
    if(item.ac.includes(code)){
      output += item.name + "-" ;
    }
  })
})
return output.slice(0, -1);
}

console.log(convert("CCGUCGUUGCGCUACAGC"));

console.log(convert("CCUCGCCGGUACUUCUCG"));

console.log(convert(window.prompt("Entre une ARN ", "")));