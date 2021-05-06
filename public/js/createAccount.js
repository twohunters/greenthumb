async function signUp(e){
    e.preventDefault();
const user_id= $('#username')
const email=$('#uEmail')
const pass =$('#userPassword')

if (uName && uEmail && uPass){
    const response = await fetch ('/api/users',{
        method: 'post',
        body: JSON.stringify({
            user_id,
            email,
            pass
        }), headers: {'Content-Type':'application/json'}
    }); if (response.ok) {
        document.location.replace('/garden/create')
    }
}
}
$('#submitUser').click(signUp)