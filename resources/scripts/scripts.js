let questions = ["How does it work?", "Which platform do you support?", "How do I invite my teammates?", "Do you have annual plan?", "How to create new workspace", "How do I set roles & permissions?"]
let answers = ["We have no clue, it somehow does", "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome", "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use.", "Yes, we have monthly and annual plans", "Please ask someone who knows about that stuff", "You will have no saying in how the software runs, we will keep all administration rights. For ever."];

console.log(questions);
console.log(answers);


function addQuestions() {
    let questionbox = document.querySelector(".question_container");

    for (let i = 0; i < questions.length; i++) {
        questionbox.innerHTML += `
            <div class="question_box_unselected">
                <div class="question_header">
                    <h4 class="question">${questions[i]}</h4>
                    <img src="resources/icons/Expand_down.svg" class="expand_unselected">
                </div>
                <p class="answer_unselected">${answers[i]}</p>
            </div>
        `;
    }
    let questionElements = document.querySelectorAll(".question_box_unselected");
    questionElements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("question_box_selected");
            element.classList.toggle("question_box_unselected");
            toggleAnswer(element);
            toggleIcon(element);
            
        });
    });
}

function toggleAnswer(element) {
    let answer = element.querySelector(".answer_unselected");
            if (answer) {
                answer.classList.toggle("answer_selected");
                answer.classList.toggle("answer_unselected");
            } else {
                let answer = element.querySelector(".answer_selected");
                answer.classList.toggle("answer_selected");
                answer.classList.toggle("answer_unselected");
            }
}

function toggleIcon(element) {
    let icon = element.querySelector(".expand_unselected");
            if (icon) {
                icon.classList.toggle("expand_selected");
                icon.classList.toggle("expand_unselected");
            } else {
                let icon = element.querySelector(".expand_selected");
                icon.classList.toggle("expand_selected");
                icon.classList.toggle("expand_unselected");
            }
}


addQuestions();       