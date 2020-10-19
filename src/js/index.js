import { noobAlertGIFS, quizQuestions } from "./questions&answers";
import { DOMSelectors } from "./DOM";
console.log("connected");

const init = function () {
  quizQuestions.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="question" id="${item.number}" >
              <div class="questionAsked" >${item.question}</div>
              <br>
              <div class="choicesContainer" >
                <div class="row" >              
                    <input type="radio" name="${item.number}" value="${item.answers.a}">
                    <label for="${item.answers.a}">${item.answers.a}</label>
                </div>

                <div class="row" >              
                <input type="radio" name="${item.number}" value="${item.answers.b}">
                <label for="${item.answers}">${item.answers.b}</label>
                </div>

                <div class="row" >              
                <input type="radio" name="${item.number}"  value="${item.answers.c}">
                <label for="${item.answers}">${item.answers.c}</label>
                </div>

                <div class="row" >              
                <input type="radio" name="${item.number}"  value="${item.answers.d}">
                <label for="${item.answers}">${item.answers.d}</label>
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
        document.getElementById(`${question.number}`).style.backgroundColor =
          "rgb(10,200,110)";
      } else {
        document.getElementById(`${question.number}`).style.backgroundColor =
          "rgb(200,100,110)";
      }
    });

    var quizScoreValue = quizScore.value;

    function noobLevel() {
      let noobAlertMessage;
      let noobAlertMedia;

      DOMSelectors.resultsContainer.style.display = "block";

      if (`${quizScoreValue}` >= "9") {
        noobAlertMessage = "NO NOOBYNESS HERE";
        noobAlertMedia = noobAlertGIFS[4];
      } else if (`${quizScoreValue}` >= "7") {
        noobAlertMessage = "AMATEUR NOOB";
        noobAlertMedia = noobAlertGIFS[3];
      } else if (`${quizScoreValue}` >= "4") {
        noobAlertMessage = "YOU'VE GOT SOME NOOB IN YOU";
        noobAlertMedia = noobAlertGIFS[2];
      } else if (`${quizScoreValue}` >= "2") {
        noobAlertMessage = "MAJOR NOOB ALERT";
        noobAlertMedia = noobAlertGIFS[1];
      } else {
        noobAlertMessage = `MASSIVE NOOB ALERT!! BEWARE!!`;
        noobAlertMedia = noobAlertGIFS[0];
      }
      DOMSelectors.results.innerHTML = "";

      DOMSelectors.results.insertAdjacentHTML(
        "beforeend",
        `<div class="noobAlert" >
      <div>Your Score is ${quizScore}/${quizQuestions.length}</div>
      <div> ${noobAlertMessage} </div>
      <img  class="noobAlertMedia" src="${noobAlertMedia}" >
      </div> 
      `
      );
    }
    noobLevel();
  };

  DOMSelectors.submitButton.addEventListener("click", submitQuiz);

  function closeResults() {
    DOMSelectors.resultsContainer.style.display = "none";
  }

  DOMSelectors.closeResults.addEventListener("click", closeResults);
};

init();
