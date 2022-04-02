let MyPets = [{name:"Meowsalot", species:"cat", age:2}, {name: "Barksalot", species: "dog", age: 3}, {name: "Purrsloud", species: "cat", age:8}];



let pets = MyPets.map(NamPets);

function NamPets(x){
  return x.species
}
 console.log(pets);
