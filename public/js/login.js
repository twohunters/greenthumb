  async function loginCheck(event) {
    event.preventDefault();
    const email = document.querySelector('#email1').value.trim();
    const password = document.querySelector('#password').value.trim();

if (email && password){
    const response = await fetch('api/users/login',{
        method:'post',
        body: JSON.stringify({
            email, password
        }), headers: {'ContentType': 'application/json'}
    }); 
    if (response.ok){
        document.location.replace('/garden')
    }else {
        alert(response.statusText)
    }
  }
}
$('#loginBtn').click(loginCheck)