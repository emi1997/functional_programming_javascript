const readline = require('readline');

var animals = [
    {name: 'Fluffy', species: 'rabbit'},
    {name: 'Carol', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]
// const dogs = animals.filter(function(x){
//     if (x.species === 'dog'){
//         return x.name;
//     }
// });
// console.log(dogs);
const names = animals.map((x)=>{
    return x.name + ' is a ' + x.species;
}).join('. ');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What species are you looking for?", 
// function (answer){
//     animals.filter(function(x){
//         if(x.species === answer){
//         console.log(x.name);
//         }
//     });
//     rl.close();
// }
console.log(names)