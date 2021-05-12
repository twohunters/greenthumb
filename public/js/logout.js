const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res =>res.json())
    .then(data => {document.location.replace('/')})
    
  };


$('#logoutBtn').click(logout)