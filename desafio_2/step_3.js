const { members } = require('./data.js');

members.forEach((member) => {
  const hoje = new Date();
  let dia = member.data.slice(0,2);
  let mes = member.data.slice(3,5);
  let ano = member.data.slice(6,10);
  let time = new Date(`${mes}-${dia}-${ano}`);
  let total_ms = Math.abs(hoje-time);
  let total_year = Math.floor(total_ms/31536000000)

  member.age = total_year;
});

console.log(members);