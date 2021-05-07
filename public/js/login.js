  async function loginCheck(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#password').value.trim();

if (name && password){
    const response = await fetch('api/users/login',{
        method:'post',
        body: JSON.stringify({
           name, password
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