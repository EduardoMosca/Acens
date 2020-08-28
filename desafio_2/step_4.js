const { members } = require('./data.js');

const dominios = members.map(member => (member.email.split('@'))[1]);

const acens = dominios.find(acens => acens.startsWith('a'));

console.log(acens);