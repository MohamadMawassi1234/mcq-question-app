const token = localStorage.getItem('token')
const isAdmin = localStorage.getItem('isAdmin')
const username = localStorage.getItem('username')
console.log(token);
console.log(isAdmin);
if (!token || token == "null") {
    location.href = "/login.html"
} else if (isAdmin == "false") {
    location.href = "/"
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
    <h1>Admin</h1>
    <h2>Welcome back <span id="admin-name"></span></h2>
    <form id="submit">
        <label for="question">Insert the Question:</label><br>
        <textarea id="question" placeholder="Question"></textarea><br>
        <label for="correct">Insert the Correct Answer:</label><br>
        <textarea id="correct" placeholder="Correct Answer"></textarea><br>
        <label for="wrong-1">Insert 3 Wrong Answers:<br></label>
        <textarea class="wrong" id="wrong-1" placeholder="Wrong Answer"></textarea><br>
        <textarea class="wrong" id="wrong-2" placeholder="Wrong Answer"></textarea><br>
        <textarea class="wrong" id="wrong-3" placeholder="Wrong Answer"></textarea><br>
        <button id="btn-submit">Submit</button>
    </form>
    <a href="./questions.html">questions</a>
    <button id="btn-logout">Logout</button><br>
    <label for="btn-display">Available Questions: </label>
    <button id="btn-display">Display</button><br>
    <label for="btn-requested"> Requested Questions: </label>
    <button id="btn-requested">Display</button>
    <div id="display-questions"></div>
`

const questionEl = document.getElementById("question")
const correctEl = document.getElementById("correct")
const wrong1El = document.getElementById("wrong-1")
const wrong2El = document.getElementById("wrong-2")
const wrong3El = document.getElementById("wrong-3")
const btnSubmit = document.getElementById("btn-submit")
const formSubmit = document.getElementById("submit")
const btnLogout = document.getElementById("btn-logout")
const btnDisplay = document.getElementById("btn-display")
const btnRequested = document.getElementById("btn-requested")
const displayQuestions = document.getElementById("display-questions")
document.getElementById("admin-name").textContent = username
let btnDelete = []
let btnEdit = []
let btnAccept = []
let btnReject = []
let display = ""
let toggleDisplay = true
let requestedDisplay = true


formSubmit.addEventListener("submit", async (e) => {
    try {
        // e.preventDefault()
        const res = await axios.post("/questions", {
            question: questionEl.value,
            correct: correctEl.value,
            wrong1: wrong1El.value,
            wrong2: wrong2El.value,
            wrong3: wrong3El.value,
            username: username,
            status: "available"
        })
        const data = await res.data
    } catch (error) {
        console.log(error)
    }
})

btnDisplay.addEventListener("click", getAllQuestions)
btnLogout.addEventListener("click", () => {
    localStorage.removeItem('token')
    location.href = "/login.html"
    console.log(localStorage.getItem('token'));
})

async function getAllQuestions () {
    if (toggleDisplay) {
        btnRequested.disabled = true
        toggleDisplay = false
        btnDisplay.textContent = "Hide"
        btnDisplay.classList.add("read-only")
        try {
            const res = await axios.get("/questions")
            const questions = await res.data
            for (let i = 0; i < questions.length; i++) {
                displayQuestions.innerHTML += `
                <h3>${questions[i].question}</h3>
                <p>${questions[i].correct}<p/>
                <p>${questions[i].wrong1}<p/>
                <p>${questions[i].wrong2}<p/>
                <p>${questions[i].wrong3}<p/>
                <p>${questions[i].username}<p/>
                <button id="btn-edit-${i}">Edit</button>
                <button id="btn-delete-${i}">Delete</button>
                `
                // displayQuestions.innerHTML = display


                // console.log(questions[i].question)
                // console.log(questions[i].correct)
                // console.log(questions[i].wrong1)
                // console.log(questions[i].wrong2)
                // console.log(questions[i].wrong3)
            }

            for (let i = 0; i < questions.length; i++) {
                btnDelete[i] = document.getElementById(`btn-delete-${i}`)
                btnDelete[i].addEventListener("click", async () => {
                    btnDelete[i].style.color = "red"
                    console.log("deleted")
                    displayQuestions.innerHTML = ""
                    const delResponse = await axios.delete(`/questions/${questions[i]._id}`)
                    const delMessage = await delResponse.data
                    getAllQuestions()
                    alert(delMessage.message)
                    
                })
                btnEdit[i] = document.getElementById(`btn-edit-${i}`)
                btnEdit[i].addEventListener("click", () => {
                    location.href = `./edit-question.html?id=${questions[i]._id}`
                })
            }
            btnDisplay.classList.remove("read-only")
            // btnDisplay.disabled = true //change it to toggle
        } catch (error) {
            console.log(error)
        }
    } else {
        displayQuestions.innerHTML = ""
        toggleDisplay = true
        btnDisplay.textContent = "Display"
        btnRequested.disabled = false
    }
}

const requestedQuestions = async () => {
    if (requestedDisplay) {
        btnDisplay.disabled = true
        requestedDisplay = false
        btnRequested.textContent = "Hide"
        btnRequested.classList.add("read-only")
    try {
        const res = await axios.get("/questions/requested")
        const questions = await res.data
        for (let i = 0; i < questions.length; i++) {
            displayQuestions.innerHTML += `
            <div id="display-requested">
                <h3>${questions[i].question}</h3>
                <p>${questions[i].correct}<p/>
                <p>${questions[i].wrong1}<p/>
                <p>${questions[i].wrong2}<p/>
                <p>${questions[i].wrong3}<p/>
                <p>${questions[i].username}<p/>
                <button id="btn-accept-${i}">Accept</button>
                <button id="btn-reject-${i}">Reject</button>
            </div>
            `
            // displayQuestions.innerHTML = display


            // console.log(questions[i].question)
            // console.log(questions[i].correct)
            // console.log(questions[i].wrong1)
            // console.log(questions[i].wrong2)
            // console.log(questions[i].wrong3)
        }

        for (let i = 0; i < questions.length; i++) {
            btnReject[i] = document.getElementById(`btn-reject-${i}`)
            btnReject[i].addEventListener("click", async () => {
                btnReject[i].style.color = "red"
                console.log("deleted")
                displayQuestions.innerHTML = ""
                const delResponse = await axios.delete(`/questions/${questions[i]._id}`)
                const delMessage = await delResponse.data
                requestedQuestions()
                alert(delMessage.message)
            })
            btnAccept[i] = document.getElementById(`btn-accept-${i}`)
            btnAccept[i].addEventListener("click", async () => {
                displayQuestions.innerHTML = ""
                const acceptResponse = await axios.patch(`/questions/${questions[i]._id}`, {status: "available"})
                requestedQuestions()
            })
        }
        
        // btnRequested.disabled = true //change it to toggle
        btnRequested.classList.remove("read-only")
    } catch (error) {
        console.log(error)
    }
      } else {
        displayQuestions.innerHTML = ""
        requestedDisplay = true
        btnRequested.textContent = "Display"
        btnDisplay.disabled = false
    }  
}

btnRequested.addEventListener("click" , requestedQuestions) }