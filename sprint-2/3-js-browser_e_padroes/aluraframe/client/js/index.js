// seleção dos inputs
var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();

  // criar elemento tr para a tabela
  var tr = document.createElement('tr');

  campos.forEach(campo => {
    // cada campo cria uma td - table data 
    var td = document.createElement('td');

    // cada td vai receber o value referente ao seu campo
    td.textContent = campo.value;

    // tr adiciona um td a si
    tr.appendChild(td);

    // 3 td's - células - criadas
  });

  // cria uma celula para volume
  var tdVolume = document.createElement('td');

  // seu valor vai ser value * value
  tdVolume.textContent = campos[1].value * campos[2].value;

  // adiciona essa td de volume à tr
  tr.appendChild(tdVolume);

  // adiciona a tr ao tbody
  tbody.appendChild(tr);

  // resetar e dar foco a data
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});