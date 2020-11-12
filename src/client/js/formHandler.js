function handleSubmit(event) {
  event.preventDefault()
  
  const text = document.getElementById('name').value
  let data = {'text': text}

  fetch('http://localhost:8080/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
 .then(res => {
    console.log(res) 
    return res
 })
 .then(function(data) {
     document.getElementById('results').innerHTML = data['status']
 })
}
export { handleSubmit }
