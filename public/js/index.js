$("#createUser").click(function(e){
    e.preventDefault()
$("#cUser").removeClass("d-none")
})
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
    }else {
       
        alert(response.statusText);
}
}
}
document.getElementById('submitUser').addEventListener('click', signUp)