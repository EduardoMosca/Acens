// Com promise
//  function pesquisa() {
//   const cidade = document.getElementById('cidade').value;
//   let api_key = '' //Insira sua api_key
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api_key}`;
//   fetch(url).then(response =>{
//     response.json().then(data => {
//       let infos = [];
//       for(let i = 0; i < 5; i++) {
//         infos.push(document.getElementById(`info${i}`));
//       }
//       infos[0].textContent = `Cidade: ${data.name}`;
//       infos[1].textContent = `Temperatura mínima: ${(data.main.temp_min - 273.15).toFixed(2)}ºC`;
//       infos[2].textContent = `Temperatura máxima: ${(data.main.temp_max - 273.15).toFixed(2)}ºC`;
//       infos[3].textContent = `Umidade: ${data.main.humidity}%`;
//       infos[4].textContent = `País: ${data.sys.country}`;
//       });
//     })
// }

//Com async await
async function pesquisa() {
  const cidade = document.getElementById('cidade').value;
  let api_key = '' //Insira sua api_key
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${api_key}`;
  let info = await fetch(url);
  let data = await info.json();
  let infos = [];
  for(let i = 0; i < 5; i++) {
    infos.push(document.getElementById(`info${i}`));
  }
  infos[0].textContent = `Cidade: ${data.name}`;
  infos[1].textContent = `Temperatura mínima: ${(data.main.temp_min - 273.15).toFixed(2)}ºC`;
  infos[2].textContent = `Temperatura máxima: ${(data.main.temp_max - 273.15).toFixed(2)}ºC`;
  infos[3].textContent = `Umidade: ${data.main.humidity}%`;
  infos[4].textContent = `País: ${data.sys.country}`; 
}