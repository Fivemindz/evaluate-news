import { clearForm, addToForm } from "./formUpdater";
import { checkForName } from "./nameChecker"

function handleSubmit(event) {
  event.preventDefault();

  clearForm();

  let text = document.getElementById('name').value;
  let data = {'text': text};

  checkForName(text);

  fetch('http://localhost:8080/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(function(res) {
    const analysis = JSON.parse(res);
    addToForm("model", analysis.model);
    addToForm("agreement", analysis.agreement);
    addToForm("subjectivity", analysis.subjectivity);
    addToForm("confidence", analysis.confidence);
    addToForm("remaining_credits", analysis.status.remaining_credits);
  })
};

export { handleSubmit }
