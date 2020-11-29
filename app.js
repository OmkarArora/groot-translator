var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  let inputText = textInput.value;

  //call server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) => console.log("error occurred", error));
}

btnTranslate.addEventListener("click", clickEventHandler);
