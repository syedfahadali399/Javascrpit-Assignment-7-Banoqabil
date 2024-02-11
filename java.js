// Assignment #1
document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
  
    var usernameRegex = /^[a-zA-Z0-9]{5,}$/;
  
    if (usernameRegex.test(username)) {
      alert("Username validation passed. Success!");
    } else {
      alert("Error: Username must be at least 5 characters long and contain only alphanumeric characters.");
    }
  })
  
// Assignment #2
btn.addEventListener('click', ()=>{
    div.style.visibility = 'visible'
})


btn2.addEventListener('click', ()=>{
    div.style.visibility = 'hidden'
})