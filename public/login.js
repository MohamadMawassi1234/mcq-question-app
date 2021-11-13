const token = localStorage.getItem('token')
if (token && token != "null") {
  location.href = "/"
} else {
const loginPage = document.getElementById("login-page")
loginPage.innerHTML = `
    <form id="form-login" method="POST">
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
    </form>
    <p id="message"></p>
    <a href="register.html">Register</a><br>
    <a href="questions.html">Questions</a>
`  
const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const formLogin = document.getElementById("form-login")
const message = document.getElementById("message")



formLogin.addEventListener('submit', async (e) => {
//   formAlertDOM.classList.remove('text-success')
  // tokenDOM.classList.remove('text-success')

  e.preventDefault()
  const email = emailEl.value
  const password = passwordEl.value

  try {
    const { data } = await axios.post("/users/login", {
      email: email,
      password: password
    })
// console.log(data.getSingleUser);
// if (data.getSingleUser == null) {
//   console.log("aothing");
//   return
// }
// let authorized = true
// localStorage.setItem('authorized', "true")
//     formAlertDOM.style.display = 'block'
    // formAlertDOM.textContent = data.msg

    // formAlertDOM.classList.add('text-success')
    // usernameEl.value = ''
    // passwordEl.value = ''
    console.log(data);
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('isAdmin', data.isAdmin)
    localStorage.setItem('username', data.username)
    // console.log(Boolean(data.accessToken == "null"));
    if (data.accessToken == "null") {
      message.textContent = "wrong username or password"
      return
    }
    console.log((data.isAdmin));
    if (data.isAdmin) {
      location.href = "/admin.html"
    } else location.href = "/"
    // resultDOM.innerHTML = ''
    // tokenDOM.textContent = 'token present'
    // tokenDOM.classList.add('text-success')
    // location.href = `./dashboard.html`
  } catch (error) {
    // formAlertDOM.style.display = 'block'
    message.textContent = error.response.data.msg
    localStorage.removeItem('token')
    // resultDOM.innerHTML = ''
    // tokenDOM.textContent = 'no token present'
    // tokenDOM.classList.remove('text-success')
  }
})}