A = [1, 2, 3, 4];
B = [1, 3, 4, 7];

diff = A.filter(function(x) { return B.indexOf(x) < 0 })

console.log(diff);