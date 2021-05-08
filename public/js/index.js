$("#createUser").click(function(e){
    e.preventDefault()
$("#cUser").removeClass("d-none")
})
async function signUp(e){
    e.preventDefault();
    const name = document.querySelector('#uName').value.trim();
    const email = document.querySelector('#uEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();


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
        console.log("PPPPPPPPIIIIINGGGGG"+name)
        alert(response.statusText);
}
}
}
document.getElementById('submitUser').addEventListener('click', signUp)
$('#nav').on('click',function(){
    document.location.replace('/') 
})
