//import/require module
const fs = require('fs');

//Using module fs to read the content of a file and put it into an array
var output = fs.readFileSync('data.tsv', 'utf8')
//trim removes spaces, tabs, linebreaks, etc
    .trim()
//split splits it into an array of strings
    .split('\n')
//map is being used to split each line (returned by split) into an array and returns an array of arrays
     .map(line => line.split('\t'))
//reduce takes the content of each line of strings and pushes it to an
//array of objects
    .reduce((customers, line) =>{
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {});
//JSON.stringify returns a JSON object of arrays and console.log logs it to the console
console.log(JSON.stringify(output, null, 2));