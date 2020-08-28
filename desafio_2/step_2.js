const { projects } = require('./data.js');

//Solução 1
function compara(a, b) {
  return (a.name > b.name) ? 1 : -1;
}

const sort = projects.sort(compara);

//Solução 2
// const sort = projects.sort((a, b) => (a.name > b.name) ? 1 : -1);

console.log(sort);