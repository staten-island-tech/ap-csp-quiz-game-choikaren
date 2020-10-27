const answerSelected = document.querySelector(
    `input[name="${question.number}"]:checked`
  ).value;

  if ( answerSelected === "YES, WHALEN HERE") {
    noobAlertMedia = noobAlertGIFS[0];
    DOMSelectors.resultsContainer.style.display = "block";
    DOMSelectors.results.innerHTML = "";
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<div class="noobAlert" >
    <div> CHONK OF A WHOLE BUTTCHEEK AND A HALF NOOB</div>
    <img  class="noobAlertMedia" src="${noobAlertMedia}" >
    </div> 
    `
    );
  } else if ( answerSelected === "MR HENRIQUES!") {
    noobAlertMedia = noobAlertGIFS[0];
    DOMSelectors.resultsContainer.style.display = "block";
    DOMSelectors.results.innerHTML = "";
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<div class="noobAlert" >
    <div> CHONK OF A WHOLE BUTTCHEEK AND A QUARTER NOOB</div>
    <img  class="noobAlertMedia" src="${noobAlertMedia}" >
    </div> 
    `
    );
  } else {
  };