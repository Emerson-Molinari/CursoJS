let varA = 'a' // b
let varB = 'b' // c
let varC = 'c' // a

const temp = varA
varA = varB;
varB = varC;
varC = temp;


console.log(varA, varB, varC)