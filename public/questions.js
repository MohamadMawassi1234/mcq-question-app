let allAnswersArray = []
const questionsList = document.getElementById("questions-list")
let score = 0

async function getShuffledQuestions() {
    const res = await axios.get("/questions/shuffle")
    const questions = await res.data
    console.log(questions)
    for (let i = 0; i < questions.length; i++) {
        let answersArray = [questions[i].correct, questions[i].wrong1, questions[i].wrong2, questions[i].wrong3]
        shuffle(answersArray)
        shuffle(answersArray)
        allAnswersArray[i] = answersArray
        questionsList.innerHTML += `
        <div class="c-flex">
        <div data-id=${i}>
        <h3>${i+1}. ${questions[i].question}</h3>
        <label><input id="${i}ans1" type="radio" value="ans1" class="ans1" name="answer${i}">${answersArray[0]}</label><br>
        <label><input id="${i}ans2" type="radio" value="ans2" class="ans2" name="answer${i}">${answersArray[1]}</label><br>
        <label><input id="${i}ans3" type="radio" value="ans3" class="ans3" name="answer${i}">${answersArray[2]}</label><br>
        <label><input id="${i}ans4" type="radio" value="ans4" class="ans4" name="answer${i}">${answersArray[3]}</label><br>
        </div>
        <img id="img${i}" class="img" src="./img/blank.png">
        </div>
        `
 
        const check1 = document.getElementById(`${i}ans1`)
        const check2 = document.getElementById(`${i}ans2`)
        const check3 = document.getElementById(`${i}ans3`)
        const check4 = document.getElementById(`${i}ans4`)
        // const Check1 = document.querySelectorAll(".ans1")
        
        // Check1[i].addEventListener("click", () => {
        //     console.log("checked!")
        //     if (answersArray[0] === questions[i].correct) {
        //         console.log("correct!");
        //     }
        // })

        // check1.addEventListener("click", () => {
        //     console.log("checked!")
        //     if (answersArray[0] === questions[i].correct) {
        //         console.log("correct!");
        //     }
        // })
        
        console.log(check1)
            
    }
    const Check1 = document.querySelectorAll(".ans1")
    const Check2 = document.querySelectorAll(".ans2")
    const Check3 = document.querySelectorAll(".ans3")
    const Check4 = document.querySelectorAll(".ans4")
    const img = document.querySelectorAll(".img")
    for (let i = 0; i < questions.length; i++) {
        console.log(Check1[i])
        Check1[i].addEventListener("click", () => {
            console.log("checked!")
            if (allAnswersArray[i][0] === questions[i].correct) {
                console.log("correct!");
                img[i].setAttribute("src", "./img/correct.png")
                Check1[i].parentElement.style.color = "green"
            } else {
                img[i].setAttribute("src", "./img/wrong.png")
                Check1[i].parentElement.style.color = "red"
            }
            Check1[i].parentElement.parentElement.classList.add("read-only")
           console.log(Check1[i].parentElement.parentElement) 

        })
        Check2[i].addEventListener("click", () => {
                    console.log("checked!")
                    if (allAnswersArray[i][1] === questions[i].correct) {
                        console.log("correct!");
                        img[i].setAttribute("src", "./img/correct.png")
                        Check2[i].parentElement.style.color = "green"
                    } else {
                        img[i].setAttribute("src", "./img/wrong.png")
                        Check2[i].parentElement.style.color = "red"
                    }
                    Check2[i].parentElement.parentElement.classList.add("read-only")

                })
        Check3[i].addEventListener("click", () => {
                    console.log("checked!")
                    if (allAnswersArray[i][2] === questions[i].correct) {
                        console.log("correct!");
                        img[i].setAttribute("src", "./img/correct.png")
                        Check3[i].parentElement.style.color = "green"
                    } else {
                        img[i].setAttribute("src", "./img/wrong.png")
                        Check3[i].parentElement.style.color = "red"
                    }
                    Check3[i].parentElement.parentElement.classList.add("read-only")

                })  
        Check4[i].addEventListener("click", () => {
                    console.log("checked!")
                    if (allAnswersArray[i][3] === questions[i].correct) {
                        console.log("correct!");
                        img[i].setAttribute("src", "./img/correct.png")
                        Check4[i].parentElement.style.color = "green"
                    } else {
                        img[i].setAttribute("src", "./img/wrong.png")
                        Check4[i].parentElement.style.color = "red"
                    }
                    Check4[i].parentElement.parentElement.classList.add("read-only")

                })        
    }
    // const Check2 = document.querySelectorAll(".ans2")
    // for (let i = 0; i < questions.length; i++) {
    //     console.log(Check2[i])
    //     Check2[i].addEventListener("click", () => {
    //         console.log("checked!")
    //         if (allAnswersArray[i][0] === questions[i].correct) {
    //             console.log("correct!");
    //         }
    //     })
    // }
    // const Check3 = document.querySelectorAll(".ans3")
    // for (let i = 0; i < questions.length; i++) {
    //     console.log(Check3[i])
    //     Check3[i].addEventListener("click", () => {
    //         console.log("checked!")
    //         if (allAnswersArray[i][0] === questions[i].correct) {
    //             console.log("correct!");
    //         }
    //     })
    // }
    // const Check4 = document.querySelectorAll(".ans4")
    // for (let i = 0; i < questions.length; i++) {
    //     console.log(Check4[i])
    //     Check4[i].addEventListener("click", () => {
    //         console.log("checked!")
    //         if (allAnswersArray[i][0] === questions[i].correct) {
    //             console.log("correct!");
    //         }
    //     })
    // }
    console.log(allAnswersArray[3][2])
    // questionsList.innerHTML = `
    // <h3>${}</h3>
    // <p></p>
    // `
}
getShuffledQuestions()

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

{/* <p>${answersArray[1]}</p>
<p>${answersArray[2]}</p>
<p>${answersArray[3]}</p> */}