const { response } = require("express");

async function signUp(e){
    e.preventDefault();
const name= $('#username')
const email=$('#uEmail')
const password =$('#userPassword')

if (uName && uEmail && uPass){
    const rawResponse = await fetch ('/api/users',{
        method: 'post',
        body: JSON.stringify({
            name,
            email,
            password
        }), headers: {'Content-Type':'application/json'}
    }); 
    console.log(rawResponse);
    const response = rawResponse.json()
    if (response.ok) {
        document.location.replace('/userpage')
    }
}
}
$('#submitUser').click(signUp)