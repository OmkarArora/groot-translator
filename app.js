var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var loader = document.querySelector(".loader");
var translatedSection = document.querySelector(".translated-section");

function init() {
  loader.style.display = "none";
}

// MOCK API
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// ACTUAL API
var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
  let inputText = textInput.value;

  // Loader set to ON
  loader.style.display = "block";

  // Hide output section
  translatedSection.style.display = "none";

  //call server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      // Turn loader off
      loader.style.display = "none";

      // Translated section now visible
      translatedSection.style.display = "unset";

      // Set translated text
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) => console.log("error occurred", error));
}

btnTranslate.addEventListener("click", clickEventHandler);
