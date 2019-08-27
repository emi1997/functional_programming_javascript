let dragon = 
    name => 
        size =>
            element =>
                name + ' is a/an ' + 
                size + 'dragon that breathes ' +
                element + '!'
let saphiraDragon = dragon('Saphira')
let averageSizedDragon = saphiraDragon('average sized')
let fireElement = averageSizedDragon('fire');
console.log(fireElement);