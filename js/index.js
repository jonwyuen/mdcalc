const anionGap = (na, cl, bicarb) => na - (cl + bicarb);
const serumOsmality = (na, k, bun, glucose) => +(2 * (na + k) + (bun/2.8) + (glucose/18)).toPrecision(5);

let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let na = document.querySelector('#na').value;
  let k = document.querySelector('#k').value;
  let cl = document.querySelector('#cl').value;
  let bicarb = document.querySelector('#bicarb').value;
  let bun = document.querySelector('#bun').value;
  let cr = document.querySelector('#cr').value;
  let glucose = document.querySelector('#glucose').value;

  let anionGapResult = anionGap(+na, +cl, +bicarb);
  let serumOsmalityResult = serumOsmality(+na, +k, +bun, +glucose);

  document.querySelector('#ag-result').innerHTML = `<strong>${anionGapResult}</strong>`;
  document.querySelector('#so-result').innerHTML = `<strong>${serumOsmalityResult}</strong>`;
  form.reset();
});
