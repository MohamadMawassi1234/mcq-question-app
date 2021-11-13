const usernameEl = document.getElementById("username")
const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const formRegister = document.getElementById("form-register")
const error = document.getElementById("error")

formRegister.addEventListener("submit", async (e) => {
    const username = usernameEl.value
    const email = emailEl.value
    const password = passwordEl.value
  
    try {
      const { data } = await axios.post('/users/register', { username, email, password })

      usernameEl.value = ''
      emailEl.value = ''
      passwordEl.value = ''
    } catch (error) {
    //   formAlertDOM.style.display = 'block'
      error.textContent = error.response.data.msg
      // localStorage.removeItem('token')
      // resultDOM.innerHTML = ''
      // tokenDOM.textContent = 'no token present'
      // tokenDOM.classList.remove('text-success')
    }
})