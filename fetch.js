let delete = document.getElementById('delete')

delete.handleUpdate('submit', function(e){
 e.preventDefault()
 let id = document.getElementById('id').value

 fetch('http://localhost:8000/api/destroy/id', {
  method: 'DELETE',
  body: JSON.stringify({
    id:id,
     }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 

  return response.json()
})
  .then(function(data)
  {
    console.log(data)
  id = document.getElementById("id")
  id.innerHTML = data.id
}).catch(error => console.error('Error:', error)); 
});
