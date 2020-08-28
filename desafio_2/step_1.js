const { projects } = require('./data.js');

//Solução 1
/*function filtra19(element) {
  return (element.year === 2019) ? true : false;
}

function filtra20(element) {
  return (element.year === 2020) ? true : false;
}

function reduz(ant, prox) {
  return ant + prox.price;
}

const filtrado19 = projects.filter(filtra19);
const reduce19 = filtrado19.reduce(reduz, 0)

const filtrado20 = projects.filter(filtra20);
const reduce20 = filtrado20.reduce(reduz, 0)*/

//Solução 2
const filtrado19 = projects.filter((element) => (element.year === 2019) ? true : false);
const reduce19 = filtrado19.reduce((ant, prox) => ant + prox.price, 0)

const filtrado20 = projects.filter((element) => (element.year === 2020) ? true : false);
const reduce20 = filtrado20.reduce((ant, prox) => ant + prox.price, 0)

console.log(`O total de valores de 2019 é de: R$${reduce19}\nO total de valores de 2020 é de: R$${reduce20}`);