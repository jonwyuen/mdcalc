const anionGap = (na, cl, bicarb) => na - (cl + bicarb);
const serumOsmality = (na, k, bun, glucose) => +(2 * (na + k) + (bun/2.8) + (glucose/18)).toPrecision(5);

let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let agNa = document.querySelector('#ag-na').value;
  let agCl = document.querySelector('#ag-cl').value;
  let agBicarb = document.querySelector('#ag-bicarb').value;
  let agResult = anionGap(+agNa, +agCl, +agBicarb);

  let soNa = document.querySelector('#so-na').value;
  let soK = document.querySelector('#so-k').value;
  let soBun = document.querySelector('#so-bun').value;
  let soGlucose = document.querySelector('#so-glucose').value;
  let soResult = serumOsmality(+soNa, +soK, +soBun, +soGlucose);

  document.querySelector('#ag-result').innerHTML = `<strong>${agResult}</strong>`;
  document.querySelector('#so-result').innerHTML = `<strong>${soResult}</strong>`;
  form.reset();
});
