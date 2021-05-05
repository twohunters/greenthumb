async function signUp(e){
    e.preventDefault();
const uName= $('#userName')
const uEmail=$('#userEmail')
const uPass=$('#userPassword')
}
if (uName && uEmail && uPass){
    const response = await fetch ('/api/users',{
        method: 'post',
        body: JSON.stringify({
            uName,
            uEmail,
            uPass
        }), headers: {'Content-Type':'application/json'}
    }); if (response.ok) {
        document.location.replace(/garden/create)
    }
}