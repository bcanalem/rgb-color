window.addEventListener('load', start);

document.querySelector('#rRange').addEventListener('change', start);
document.querySelector('#gRange').addEventListener('change', start);
document.querySelector('#bRange').addEventListener('change', start);

function start() {
  console.log('Loading completed');
  setRangeValue();
}

function setRangeValue() {
  function setColorBox(r, g, b) {
    var colorBox = document.querySelector('.colorBox');
    colorBox.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  var rValue = document.querySelector('#rRange').value;
  var gValue = document.querySelector('#gRange').value;
  var bValue = document.querySelector('#bRange').value;

  var rValueBox = document.querySelector('#rValue');
  rValueBox.value = rValue;
  var gValueBox = document.querySelector('#gValue');
  gValueBox.value = gValue;
  var bValueBox = document.querySelector('#bValue');
  bValueBox.value = bValue;
  setColorBox(rValue, gValue, bValue);
}
