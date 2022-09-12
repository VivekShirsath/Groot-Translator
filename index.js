var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#textinput");
var outputDiv = document.querySelector("#textoutput");

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server. Try after some time!");
}

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

console.log(txtInput);
function clickEventHandler() {
  var inputText = txtInput.value; // taking input

  if (txtInput.value === "") {
    txtInput.value = "Please Enter Something in English";
    console.log("hi");
    setTimeout(function () {
      txtInput.value = "";
    }, 2000);
  }

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })

    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
