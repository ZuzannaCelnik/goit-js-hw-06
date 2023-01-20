const form = document.querySelector('.login-form');
const input=document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget
    
    if (email.value==='' || password.value==='') {
        alert("Fill the gaps")
    }
  
    const userInput = {
        email: email.value,
        password: password.value
    }
    console.log(userInput)
    form.reset();
})
