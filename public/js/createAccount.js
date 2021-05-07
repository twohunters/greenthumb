async function signUp(e){
    e.preventDefault();
const name= $('#username')
const email=$('#uEmail')
const password =$('#userPassword')

if (uName && uEmail && uPass){
    const response = await fetch ('/api/users',{
        method: 'post',
        body: JSON.parse({
            name,
            email,
            password
        }), headers: {'Content-Type':'application/json'}
    }); if (response.ok) {
        document.location.replace('/userpage')
    }
}
}
$('#submitUser').click(signUp)