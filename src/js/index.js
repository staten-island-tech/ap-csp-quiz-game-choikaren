import { quizQuestions } from "./questions&answers";
import { DOMSelectors } from "./DOM";
console.log("connected");

const init = function () {

  quizQuestions.forEach((item) =>

    DOMSelectors.quizContainer.insertAdjacentHTML("beforeend",
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

    function noobLevel() {
      let noobAlertMessage;

      DOMSelectors.resultsContainer.style.display = "block";

      if (`${quizScore}` >= '4') {
        noobAlertMessage = 'MASSIVE NOOB ALERT!! BEWARE!!'
      }
      else if (`${quizScore}` >= '3') {
        noobAlertMessage = 'MAJOR NOOB ALERT'
      }
      else if (`${quizScore}` >= '2') {
        noobAlertMessage = 'MINOR NOOB ALERT'
      }
      else if (`${quizScore}` >= '1') {
        noobAlertMessage = 'AMATEURE NOOB'
      }
      else {
        noobAlertMessage = 'NO NOOBYNESS HERE'
      }
      DOMSelectors.results.innerHTML = "";
 
      DOMSelectors.results.insertAdjacentHTML("beforeend",
        `<div class="noobAlert" >
      <div>Your Score is ${quizScore}/${quizQuestions.length}</div>
      <div> ${noobAlertMessage} </div>
      </div> 
      `);
    };
    noobLevel();
  }


  DOMSelectors.submitButton.addEventListener("click", submitQuiz);

  function closeResults() {
    DOMSelectors.resultsContainer.style.display = "none";

  }

  DOMSelectors.closeResults.addEventListener("click", closeResults);


};



init(); 