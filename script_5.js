let ret = true;

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let sorted = books.sort((a, b) => a.rented - b.rented);
let found = books.find(book => book.id == 873495).title;

sorted.forEach((item, index) => 
{
  if(item.id == 133712)
  {
    books.pop(index)
  }
});

books.forEach((item, index) => 
{
  if(item.rented <= 0){
    ret = false;
  }
});

if(ret == false )
{
  console.log("Au moin un livre n'a pas était emprunter");
} else {
  console.log("Aucun livre n'a pas était emprunter");
}

console.log("Le livre le plus emprunter est :" + sorted[sorted.length - 1].title);
console.log("Le livre le moin emprunter est :" + sorted[0].title);

console.log("Le livre avec l'id 873495 est :" + found)

console.log("Liste des livre par ordre alphabetique:")
console.log(sorted)