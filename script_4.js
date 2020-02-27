let array = []

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les inventeur née dans les année 70 sont :")

entrepreneurs.forEach((item, index) => {
  if (item.year < 1980 && item.year > 1969)
  {
    console.log(item.first + item.last + "Est née en " + item.year)
  }
})

console.log("Nom et prenom")
entrepreneurs.forEach((item, index) => {
  output = {Nom: item.first, Prenom: item.last}
  array.push(output);
})
console.log(array);

console.log("Les inventeur on cette age en 2020 :");

entrepreneurs.forEach((item, index) => {
  console.log(item.first + item.last + "Age : " + (2020 - item.year));
})

console.log("Les entrepeneur ranger pars ordre alphabetique:");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));