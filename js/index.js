const anionGap = (na, cl, bicarb) => na - (cl + bicarb);
const serumOsmality = (na, k, bun, glucose) => +(2 * (na + k) + (bun/2.8) + (glucose/18)).toPrecision(5);

let anionGapForm = document.querySelector('#ag-form');
let serumOsmalityForm = document.querySelector('#so-form');

anionGapForm.addEventListener('submit', e => {
  e.preventDefault();
  let na = document.querySelector('#ag-na').value;
  let cl = document.querySelector('#ag-cl').value;
  let bicarb = document.querySelector('#ag-bicarb').value;
  let result = anionGap(+na, +cl, +bicarb);
  document.querySelector('#ag-result').innerText = result;
});

serumOsmalityForm.addEventListener('submit', e => {
  e.preventDefault();
  let na = document.querySelector('#so-na').value;
  let k = document.querySelector('#so-k').value;
  let bun = document.querySelector('#so-bun').value;
  let glucose = document.querySelector('#so-glucose').value;
  let result = serumOsmality(+na, +k, +bun, +glucose);
  document.querySelector('#so-result').innerText = result;
});
