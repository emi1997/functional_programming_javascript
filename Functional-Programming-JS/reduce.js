/**What is reduce??
 * - Turns List into something else
 * - Less specific than map, reject, find, filter, ...
 */
var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

var totalAmount = orders.reduce(function(sum, order){
   console.log('hello ', sum, JSON.stringify(order));
    return sum + order.amount
}, 0)
// for (var i = 0; i< orders.length; i++){
//     totalAmount += orders[i].amount
// }

console.log(totalAmount);