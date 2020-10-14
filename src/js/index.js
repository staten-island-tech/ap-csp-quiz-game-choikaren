import { quizQuestions } from "./questions";
import { DOMSelectors } from "./DOM";
console.log ("connected");

const init = function () {
    
    quizQuestions.forEach((item) => 
    
        DOMSelectors.quizContainer.insertAdjacentHTML("afterbegin",
            `<div class="question">
              <div class="questionAsked">${item.question}</div>
              <br>
              <div class="choicesContainer" >

              <input type="radio" id="${item.answers.a}" name="${item.number}" value="${item.answers.a}">
              <label for="${item.answers.a}">${item.answers.a}</label><br>

              <input type="radio" id="${item.answers.b}" name="${item.number}" value="${item.answers.b}">
              <label for="${item.answers.b}">${item.answers.b}</label><br>

              <input type="radio" id="${item.answers.c}" name="${item.number}"  value="${item.answers.c}">
              <label for="${item.answers.c}">${item.answers.c}</label>
              </div>
              <br>
            </div>`
        )
    );

};

init ();