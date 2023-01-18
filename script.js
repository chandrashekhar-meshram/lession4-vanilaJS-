
// how to use prompt, alert and console
//let userName = prompt('Your user name');

//console.log('Hello! ' + userName);
//prompt("hi");
//alert("hi "+ userName);
//---------------------------------------------------

var text_input = document.querySelector("#txt-input");
var btn_translate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL = (input) => {
  return serverURL + "?" + "text" + input
}

const errorHandler = () => {
  console.log("Error occured ", error);
  alert("Something wrong with server! try again after some time");
}

const clickHandler = () => {
  var inputText = text_input.value;

  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btn_translate.addEventListener("click", clickHandler)