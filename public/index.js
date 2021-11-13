const token = localStorage.getItem('token')
const isAdmin = localStorage.getItem('isAdmin')
const username = localStorage.getItem('username')
console.log(token);
console.log(isAdmin);
if (!token || token == "null") {
    location.href = "/login.html"
} else if (isAdmin == "true") {
    location.href = "/admin.html"
} else {
async function getQuestions() {
    try {
        const { data } = await axios.get('/users/getQuestions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(data);
        console.log(token);
      //   resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
      
      //   data.secret
      } catch (error) {
        localStorage.removeItem('token')
        console.log(error);
      //   resultDOM.innerHTML = `<p>${error.response.data}</p>`
      }
}
getQuestions()

const manageQuestions = document.getElementById("manage-questions")

manageQuestions.innerHTML = `
    <h2>Welcome back <span id="username"></span></h2>
    <form id="submit">
        <label for="question">Insert the Question:</label><br>
        <textarea id="question" placeholder="Question"></textarea><br>
        <label for="correct">Insert the Correct Answer:</label><br>
        <textarea id="correct" placeholder="Correct Answer"></textarea><br>
        <label for="wrong-1">Insert 3 Wrong Answers:<br></label>
        <textarea class="wrong" id="wrong-1" placeholder="Wrong Answer"></textarea><br>
        <textarea class="wrong" id="wrong-2" placeholder="Wrong Answer"></textarea><br>
        <textarea class="wrong" id="wrong-3" placeholder="Wrong Answer"></textarea><br>
        <button id="btn-submit">Request</button>
    </form>
    <a href="./questions.html">questions</a>
    <button id="btn-logout">Logout</button>
`

const questionEl = document.getElementById("question")
const correctEl = document.getElementById("correct")
const wrong1El = document.getElementById("wrong-1")
const wrong2El = document.getElementById("wrong-2")
const wrong3El = document.getElementById("wrong-3")
const formSubmit = document.getElementById("submit")
const btnLogout = document.getElementById("btn-logout")
document.getElementById("username").textContent = username



formSubmit.addEventListener("submit", async (e) => {
    try {
        e.preventDefault()
        const res = await axios.post("/questions", {
            question: questionEl.value,
            correct: correctEl.value,
            wrong1: wrong1El.value,
            wrong2: wrong2El.value,
            wrong3: wrong3El.value,
            username: username,
            status: "requested"
        })
        const data = await res.data
        console.log(data);
    } catch (error) {
        console.log(error)
    }
})

btnLogout.addEventListener("click", () => {
    localStorage.removeItem('token')
    location.href = "/login.html"
    console.log(localStorage.getItem('token'));
})

}