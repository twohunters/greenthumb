async function signUp(e){
    e.preventDefault();
const name= $('#username')
const email=$('#uEmail')
const password =$('#userPassword')

if (name && email && password){
    const response = await fetch ('/api/users',{
        method: 'post',
        body: JSON.stringify({
            name,
            email,
            password
        }), headers: {'Content-Type':'application/json'}
    }); if (response.ok) {
        document.location.replace('/creategarden')
    }
}
}
$('#submitUser').click(signUp)