  async function loginCheck(event) {
    event.preventDefault();
const email= $('#email')
const password =$('password')

if (email && password){
    const response = await fetch('api/user/login',{
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