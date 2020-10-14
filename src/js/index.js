import { quizQuestions } from "./questions";
import { DOMSelectors } from "./DOM";
console.log("connected");

const init = function () {

  quizQuestions.forEach((item) =>

    DOMSelectors.quizContainer.insertAdjacentHTML("afterbegin",
      `<div class="question" id="${item.number}" >
              <div class="questionAsked" >${item.question}</div>
              <br>
              <div class="choicesContainer" >
                <div class="row" >              
                    <input type="radio" id="${item.answers}" name="${item.number}" value="${item.answers.a}">
                    <label for="${item.answers.a}">${item.answers.a}</label>
                </div>

                <div class="row" >              
                <input type="radio" id="${item.answers}" name="${item.number}" value="${item.answers.b}">
                <label for="${item.answers}">${item.answers.b}</label>
                </div>

                <div class="row" >              
                <input type="radio" id="${item.answers}" name="${item.number}"  value="${item.answers.c}">
                <label for="${item.answers}">${item.answers.c}</label>
                </div>

              
              </div>
            </div>`
    )
  );

  const submitQuiz = function () {
    var quizScore = 0;

    quizQuestions.forEach((question) => {
      const answerSelected = document.querySelector(
        `input[name="${question.number}"]:checked`
      ).value;
      if (answerSelected === `${question.correctAnswer}`) {
        quizScore++;
        document.getElementById(`${question.number}`).style.backgroundColor = "rgb(10,200,110)";
      }
      else {
        document.getElementById(`${question.number}`).style.backgroundColor = "rgb(200,100,110)";
      }
    }
    );
    DOMSelectors.resultsContainer.innerHTML = "";
    DOMSelectors.resultsContainer.insertAdjacentHTML("afterbegin", `<h1>Your Score is ${quizScore}/${quizQuestions.length}</h1>` ) ;
  }


  DOMSelectors.submitButton.addEventListener("click", submitQuiz );


};

init(); 