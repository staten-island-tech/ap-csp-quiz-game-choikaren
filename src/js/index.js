import { noobAlertGIFS, quizQuestions } from "./questions&answers";
import { DOMSelectors } from "./DOM";
console.log("connected");

const init = function () {
  
  

  quizQuestions.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="question" id="${item.number}">
              <div class="questionAsked" >${item.question}</div>
              <br>
              <div class="choicesContainer" >
                <div class="row" >
                    <label for="${item.number}.1">              
                    <input id="${item.number}.1" type="radio" name="${item.number}" value="${item.answers.a}" onclick="whalenHenriquesTrigger()" >
                    ${item.answers.a}</label>
                </div>

                <div class="row" >
                <label for="${item.number}.2">              
                <input  id="${item.number}.2" type="radio" name="${item.number}" value="${item.answers.b}" onclick="whalenHenriquesTrigger()">
                ${item.answers.b}</label>
                </div>

                <div class="row" >
                <label for="${item.number}.3">              
                <input  id="${item.number}.3"  type="radio" name="${item.number}"  value="${item.answers.c}" onclick="whalenHenriquesTrigger()">
                ${item.answers.c}</label>
                </div>

                <div class="row" >
                <label for="${item.number}.4">              
                <input  id="${item.number}.4" type="radio" name="${item.number}"  value="${item.answers.d}" onclick="whalenHenriquesTrigger()">
                ${item.answers.d}</label>
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
        noobAlertMessage = "NOOBULAR ACTIVITY DETECTED";
        noobAlertMedia = noobAlertGIFS[3];
      } else if (`${quizScoreValue}` >= "4") {
        noobAlertMessage = "YOU'VE GOT SOME BIG NOOB IN YOU";
        noobAlertMedia = noobAlertGIFS[2];
      } else if (`${quizScoreValue}` >= "2") {
        noobAlertMessage = "MAJOR NOOB ALERT";
        noobAlertMedia = noobAlertGIFS[1];
      } else {
        noobAlertMessage = `CHONK OF A NOOB!! BEWARE!!`;
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
