// https://www.omnicalculator.com/conversion/lbs-to-kg-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kgRadio = document.getElementById('kgRadio');
const lbsRadio = document.getElementById('lbsRadio');

let kg;
let lbs = v; 

// labels of the inpust
const variable = document.getElementById('variable');

kgRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;

  else if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;
})

// calculation

function computekg() {
  return Number(lbs.value) / 2.205;
}

function computelbs() {
  return Number(kg.value) * 2.205;
}