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
  .then(res => res.json())
  .then(function(json){
    
    
    
  })
}
export { handleSubmit }
