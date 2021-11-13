const token = localStorage.getItem('token')
const isAdmin = localStorage.getItem('isAdmin')
console.log(token);
console.log(isAdmin);
if (!token || token == "null") {
    location.href = "/login.html"
} else if (isAdmin == "false") {
    location.href = "/"
} else {

const params = window.location.search
const id = new URLSearchParams(params).get("id")
const editQuestionEl = document.getElementById("edit-question")
const editCorrectEl = document.getElementById("edit-correct")
const editWrong1El = document.getElementById("edit-wrong-1")
const editWrong2El = document.getElementById("edit-wrong-2")
const editWrong3El = document.getElementById("edit-wrong-3")
const editSubmit = document.getElementById("edit-submit")

// let asd = "6171effb47c398e36cbb5df4"
// id = id.substring(1, id.length-1);

const getQuestion = async () => {
    try {
        console.log(id)
        // console.log(asd)
        const res = await axios.get(`/questions/${id}`)
        const question = await res.data
        editQuestionEl.value = question.question
        editCorrectEl.value = question.correct
        editWrong1El.value = question.wrong1
        editWrong2El.value = question.wrong2
        editWrong3El.value = question.wrong3
    } catch (error) {
        console.log(error)
    }
    
}

getQuestion()

const editQuestion = async (e) => {
    try {
        e.preventDefault()
        const res = await axios.patch(`/questions/${id}`, {
            question: editQuestionEl.value,
            correct: editCorrectEl.value,
            wrong1: editWrong1El.value,
            wrong2: editWrong2El.value,
            wrong3: editWrong3El.value
        })
        // const data = await res.data
        location.href = "/admin.html"
    } catch (error) {
        console.log(error);
    }
}


editSubmit.addEventListener("submit", editQuestion)}