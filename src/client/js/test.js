import { handleSubmit } from "./formHandler";
import { addToForm, clearForm } from "./formUpdater";

test('add text to form as new div', () => {
  document.body.innerHTML ='<div id="results"></div>'
  addToForm('text', 'data')
  expect(document.getElementById('results').childElementCount).toBe(1)
})

test('remove child elements from form', () => {
  document.body.innerHTML = 
  '<div id="results">' + 
    '<div>Some Text </div>' +
    '<div>Some Text </div>' +
    '<div>Some Text </div>' +
    '<div>Some Text </div>' +  
  '</div>'

  clearForm()
  
  expect(document.getElementById('results').childElementCount).toBe(0)
})
