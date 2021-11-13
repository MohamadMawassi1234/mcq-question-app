// let allAnswersArray = []
// const questionsList = document.getElementById("questions-list")

// async function getAllQuestions() {
//     const res = await axios.get("/questions")
//     const questions = await res.data
//     console.log(questions)
//     for (let i = 0; i < questions.length; i++) {
//         let answersArray = [questions[i].correct, questions[i].wrong1, questions[i].wrong2, questions[i].wrong3]
//         shuffle(answersArray)
//         allAnswersArray[i] = answersArray
//         questionsList.innerHTML += `
//         <h3>${questions[i].question}</h3>
//         <label><input id="${i}ans1" type="radio" value="ans1" class="ans1" name="answer${i}">${answersArray[0]}</label><br>
//         <label><input id="${i}ans2" type="radio" value="ans2" class="ans2" name="answer${i}">${answersArray[1]}</label><br>
//         <label><input id="${i}ans3" type="radio" value="ans3" class="ans3" name="answer${i}">${answersArray[2]}</label><br>
//         <label><input id="${i}ans4" type="radio" value="ans4" class="ans4" name="answer${i}">${answersArray[3]}</label><br>
//         `
 
//         const check1 = document.getElementById(`${i}ans1`)
//         const check2 = document.getElementById(`${i}ans2`)
//         const check3 = document.getElementById(`${i}ans3`)
//         const check4 = document.getElementById(`${i}ans4`)
//         // const Check1 = document.querySelectorAll(".ans1")
        
//         // Check1[i].addEventListener("click", () => {
//         //     console.log("checked!")
//         //     if (answersArray[0] === questions[i].correct) {
//         //         console.log("correct!");
//         //     }
//         // })

//         // check1.addEventListener("click", () => {
//         //     console.log("checked!")
//         //     if (answersArray[0] === questions[i].correct) {
//         //         console.log("correct!");
//         //     }
//         // })
        
//         console.log(check1)
            
//     }
//     const Check1 = document.querySelectorAll(".ans1")
//     for (let i = 0; i < questions.length; i++) {
//         console.log(Check1[i])
//         Check1[i].addEventListener("click", () => {
//             console.log("checked!")
//             if (allAnswersArray[i][0] === questions[i].correct) {
//                 console.log("correct!");
//             }
//         })
//     }
//     // const Check2 = document.querySelectorAll(".ans2")
//     // for (let i = 0; i < questions.length; i++) {
//     //     console.log(Check2[i])
//     //     Check2[i].addEventListener("click", () => {
//     //         console.log("checked!")
//     //         if (allAnswersArray[i][0] === questions[i].correct) {
//     //             console.log("correct!");
//     //         }
//     //     })
//     // }
//     // const Check3 = document.querySelectorAll(".ans3")
//     // for (let i = 0; i < questions.length; i++) {
//     //     console.log(Check3[i])
//     //     Check3[i].addEventListener("click", () => {
//     //         console.log("checked!")
//     //         if (allAnswersArray[i][0] === questions[i].correct) {
//     //             console.log("correct!");
//     //         }
//     //     })
//     // }
//     // const Check4 = document.querySelectorAll(".ans4")
//     // for (let i = 0; i < questions.length; i++) {
//     //     console.log(Check4[i])
//     //     Check4[i].addEventListener("click", () => {
//     //         console.log("checked!")
//     //         if (allAnswersArray[i][0] === questions[i].correct) {
//     //             console.log("correct!");
//     //         }
//     //     })
//     // }
//     console.log(allAnswersArray[3][2])
//     // questionsList.innerHTML = `
//     // <h3>${}</h3>
//     // <p></p>
//     // `
// }
// getAllQuestions()

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// {/* <p>${answersArray[1]}</p>
// <p>${answersArray[2]}</p>
// <p>${answersArray[3]}</p> */}

// admin below





// const token = localStorage.getItem('token')
// const isAdmin = localStorage.getItem('isAdmin')
// const username = localStorage.getItem('username')
// console.log(token);
// console.log(isAdmin);
// if (!token || token == "null") {
//     location.href = "/login.html"
// } else if (isAdmin == "false") {
//     location.href = "/"
// } else {
// async function getQuestions() {
//     try {
//         const { data } = await axios.get('/users/getQuestions', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         console.log(data);
//         console.log(token);
//       //   resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
      
//       //   data.secret
//       } catch (error) {
//         localStorage.removeItem('token')
//         console.log(error);
//       //   resultDOM.innerHTML = `<p>${error.response.data}</p>`
//       }
// }
// getQuestions()

// const manageQuestions = document.getElementById("manage-questions")

// manageQuestions.innerHTML = `
//     <form id="submit">
//         <label for="question">Insert the Question:</label><br>
//         <textarea id="question" placeholder="Question"></textarea><br>
//         <label for="correct">Insert the Correct Answer:</label><br>
//         <textarea id="correct" placeholder="Correct Answer"></textarea><br>
//         <label for="wrong-1">Insert 3 Wrong Answers:<br></label>
//         <textarea class="wrong" id="wrong-1" placeholder="Wrong Answer"></textarea><br>
//         <textarea class="wrong" id="wrong-2" placeholder="Wrong Answer"></textarea><br>
//         <textarea class="wrong" id="wrong-3" placeholder="Wrong Answer"></textarea><br>
//         <button id="btn-submit">Submit</button>
//     </form>
//     <a href="./questions.html">questions</a>
//     <button id="btn-logout">Logout</button><br>
//     <label for="btn-display">Available Questions: </label>
//     <button id="btn-display">Display</button><br>
//     <label for="btn-requested"> Requested Questions: </label>
//     <button id="btn-requested">Display</button>
//     <div id="display-questions"></div>
// `

// const questionEl = document.getElementById("question")
// const correctEl = document.getElementById("correct")
// const wrong1El = document.getElementById("wrong-1")
// const wrong2El = document.getElementById("wrong-2")
// const wrong3El = document.getElementById("wrong-3")
// const btnSubmit = document.getElementById("btn-submit")
// const formSubmit = document.getElementById("submit")
// const btnLogout = document.getElementById("btn-logout")
// const btnDisplay = document.getElementById("btn-display")
// const btnRequested = document.getElementById("btn-requested")
// const displayQuestions = document.getElementById("display-questions")
// let btnDelete = []
// let btnEdit = []
// let btnAccept = []
// let btnReject = []
// let display = ""
// let toggleDisplay = true
// let requestedDisplay = true


// formSubmit.addEventListener("submit", async (e) => {
//     try {
//         // e.preventDefault()
//         const res = await axios.post("/questions", {
//             question: questionEl.value,
//             correct: correctEl.value,
//             wrong1: wrong1El.value,
//             wrong2: wrong2El.value,
//             wrong3: wrong3El.value,
//             username: username,
//             status: "available"
//         })
//         const data = await res.data
//     } catch (error) {
//         console.log(error)
//     }
// })

// btnDisplay.addEventListener("click", getAllQuestions)
// btnLogout.addEventListener("click", () => {
//     localStorage.removeItem('token')
//     location.href = "/login.html"
//     console.log(localStorage.getItem('token'));
// })

// async function getAllQuestions () {
//     if (requestedDisplay){
//     if (toggleDisplay) {
//         toggleDisplay = false
//         btnDisplay.textContent = "Hide"
//         btnDisplay.classList.add("read-only")
//         try {
//             const res = await axios.get("/questions")
//             const questions = await res.data
//             for (let i = 0; i < questions.length; i++) {
//                 displayQuestions.innerHTML += `
//                 <h3>${questions[i].question}</h3>
//                 <p>${questions[i].correct}<p/>
//                 <p>${questions[i].wrong1}<p/>
//                 <p>${questions[i].wrong2}<p/>
//                 <p>${questions[i].wrong3}<p/>
//                 <p>${questions[i].username}<p/>
//                 <button id="btn-edit-${i}">Edit</button>
//                 <button id="btn-delete-${i}">Delete</button>
//                 `
//                 // displayQuestions.innerHTML = display


//                 // console.log(questions[i].question)
//                 // console.log(questions[i].correct)
//                 // console.log(questions[i].wrong1)
//                 // console.log(questions[i].wrong2)
//                 // console.log(questions[i].wrong3)
//             }

//             for (let i = 0; i < questions.length; i++) {
//                 btnDelete[i] = document.getElementById(`btn-delete-${i}`)
//                 btnDelete[i].addEventListener("click", async () => {
//                     btnDelete[i].style.color = "red"
//                     console.log("deleted")
//                     displayQuestions.innerHTML = ""
//                     const delResponse = await axios.delete(`/questions/${questions[i]._id}`)
//                     const delMessage = await delResponse.data
//                     getAllQuestions()
//                     alert(delMessage.message)
                    
//                 })
//                 btnEdit[i] = document.getElementById(`btn-edit-${i}`)
//                 btnEdit[i].addEventListener("click", () => {
//                     location.href = `./edit-question.html?id=${questions[i]._id}`
//                 })
//             }
//             btnDisplay.classList.remove("read-only")
//             // btnDisplay.disabled = true //change it to toggle
//         } catch (error) {
//             console.log(error)
//         }
//     } else {
//         displayQuestions.innerHTML = ""
//         toggleDisplay = true
//         btnDisplay.textContent = "Display"
//     }}
// }

// const requestedQuestions = async () => {
//     if(toggleDisplay){
//     if (requestedDisplay) {
//         requestedDisplay = false
//         btnRequested.textContent = "Hide"
//         btnRequested.classList.add("read-only")
//     try {
//         const res = await axios.get("/questions/requested")
//         const questions = await res.data
//         for (let i = 0; i < questions.length; i++) {
//             displayQuestions.innerHTML += `
//             <div id="display-requested">
//                 <h3>${questions[i].question}</h3>
//                 <p>${questions[i].correct}<p/>
//                 <p>${questions[i].wrong1}<p/>
//                 <p>${questions[i].wrong2}<p/>
//                 <p>${questions[i].wrong3}<p/>
//                 <p>${questions[i].username}<p/>
//                 <button id="btn-accept-${i}">Accept</button>
//                 <button id="btn-reject-${i}">Reject</button>
//             </div>
//             `
//             // displayQuestions.innerHTML = display


//             // console.log(questions[i].question)
//             // console.log(questions[i].correct)
//             // console.log(questions[i].wrong1)
//             // console.log(questions[i].wrong2)
//             // console.log(questions[i].wrong3)
//         }

//         for (let i = 0; i < questions.length; i++) {
//             btnReject[i] = document.getElementById(`btn-reject-${i}`)
//             btnReject[i].addEventListener("click", async () => {
//                 btnReject[i].style.color = "red"
//                 console.log("deleted")
//                 displayQuestions.innerHTML = ""
//                 const delResponse = await axios.delete(`/questions/${questions[i]._id}`)
//                 const delMessage = await delResponse.data
//                 requestedQuestions()
//                 alert(delMessage.message)
//             })
//             btnAccept[i] = document.getElementById(`btn-accept-${i}`)
//             btnAccept[i].addEventListener("click", async () => {
//                 displayQuestions.innerHTML = ""
//                 const acceptResponse = await axios.patch(`/questions/${questions[i]._id}`, {status: "available"})
//                 requestedQuestions()
//             })
//         }
        
//         // btnRequested.disabled = true //change it to toggle
//         btnRequested.classList.remove("read-only")
//     } catch (error) {
//         console.log(error)
//     }
//       } else {
//         displayQuestions.innerHTML = ""
//         requestedDisplay = true
//         btnRequested.textContent = "Display"
//     }  }
// }

// btnRequested.addEventListener("click" , requestedQuestions) }