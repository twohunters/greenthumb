 function loginCheck(event) {
    console.log("loginCheck")
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

if (name && password){
    const response =  fetch('/api/users/login',{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
           name: name, 
           password: password
        }),
        
    })
    if (response.ok) {
      document.location.replace('/userpage')
  }else {
     
      alert(response.statusText);
}
}
}

$('#loginBtn').click(loginCheck)