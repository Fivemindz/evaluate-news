function clearForm () {
  const table = document.getElementById('results');
  let count = table.childElementCount;
  
  while (count > 0) {
    table.removeChild(table.childNodes[0]);
    --count;
  }
}

function addToForm (key, data) {
  const table = document.getElementById('results');
  const line = document.createElement('div');
  const text = document.createTextNode(`${key} is equal to ${data}`);
  line.appendChild(text);
  table.appendChild(line);
}

export { addToForm, clearForm }
