function handleSubmit(event) {
  event.preventDefault()
  
  let text = document.getElementById('name').value
  let data = {'text': text}

  fetch('http://localhost:8081/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
 .then(function(res) {
    console.log(res) 
    document.getElementById('results').innerHTML = res
 })
}
export { handleSubmit }
