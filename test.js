    
 




let form=document.getElementById('add')

form.addEventListener('submit', function(e){
 e.preventDefault()

 let title = document.getElementById('title').value
 let description  =document.getElementById('description').value
 let completion = document.getElementById('completion').value
 let user_id = document.getElementById('user_id').value

 fetch('http://localhost:8000/api/create', {
  method: 'POST',
  body: JSON.stringify({
    title:title,
    description:description,
    completion:completion,
    user_id:user_id

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
  title = document.getElementById("title")
  description = document.getElementById("description")
  completion = document.getElementById("completion")
  user_id = document.getElementById("user_id")

  title.innerHTML = data.title
  description.innerHTML = data.description  
  completion.innerHTML = data.completion
  user_id.innerHTML = data.user_id  
}).catch(error => console.error('Error:', error)); 
});



        
let daform=document.getElementById('update')
let mess = document.getElementById('mess')
daform.addEventListener('submit', function(e){
         e.preventDefault()
        
         let id = document.getElementById('id').value
         let title = document.getElementById('title').value
         let description = document.getElementById('description').value
         let completion = document.getElementById('completion ').value
         let user_id = document.getElementById('user_id ').value
         

            fetch('http://localhost:8000/api/update/id' + id, {
                method: 'PUT',
                body: JSON.stringify({
                  id:id,
                  title:title,
                  description:description,
                  completion:completion,
                  user_id:user_id
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
                title = document.getElementById("title")
                description = document.getElementById("description")
                completion = document.getElementById("completion")    
                user_id = document.getElementById("user_id")
              
               id.innerHTML = data.id
                title.innerHTML = data.title 
                description.innerHTML = data.description
                user_id.innerHTML = data.user_id
                window.location.href='login.html';
              }).catch(error => console.error('Error:', error)); 

        

        
        });


let destroy =document.getElementById('destroy')
if(destroy){
  destroy.addEventListener('submit', function(e){
    e.preventDefault()
   
    let id = document.getElementById('id').value
    let title = document.getElementById('title').value
    let description  =document.getElementById('description').value
    let completion = document.getElementById('completion').value
    let user_id = document.getElementById('user_id').value
   
    fetch('http://localhost:8000/api/destroy/id', {
     method: 'DELETE',
     body: JSON.stringify({
       id:id,
       title:title,
       description:description,
       completion:completion,
       user_id:user_id
   
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
     title = document.getElementById("title")
     description = document.getElementById("description")
     completion = document.getElementById("completion")
     user_id = document.getElementById("user_id")
   
     title.innerHTML = data.title
     description.innerHTML = data.description  
     completion.innerHTML = data.completion
     user_id.innerHTML = data.user_id  
   }).catch(error => console.error('Error:', error)); 
   });

}


// let message = document.getElementById("message");

// let form = document.forms.add;

// form.onsubmit = function () {
//     if (form.id.value == "") {
//         message.innerHTML = "please enter id";
//         return false;
//     }else if(form.title.value == ""){
//         message.innerHTML = "please enter title of the to do ";
//         return false;
//     }
//     else if(form.description.value == ""){
//         message.innerHTML = "please enter description";
//         return false;
//     }
//     else if(form.completion.value == ""){
//         message.innerHTML = "please enter date to be completed";
//         return false;
//     } else {
//         message.innerHTML = "";
//         return true;
//     }
// }
// form.addEventListener("submit", function (event) {
// 	// stop form submission
// 	event.preventDefault();

// 	// validate the form
// 	let title = hasValue(form.elements["title"], NAME_REQUIRED);
// 	let description = validateEmail(form.elements["description"], EMAIL_REQUIRED, EMAIL_INVALID);
// 	// if valid, submit the form.
// 	if (nameValid && emailValid) {
// 		fetch("http://localhost:8000/api/update", {
//     method: "POST",
//     body: JSON.stringify({
//         userId: 1,
//         title: "Fix my bugs",
//         completed: false
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// });
// 	}

// });


