const form = document.querySelector('.login-form');
const input=document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget
  
    const userInput = {
        email: email.value,
        password: password.value
    }
    
   if (email.value==='' || password.value==='') {
        alert("Fill the gaps")
    } else {
        console.log(userInput)
    }
    form.reset();
})
