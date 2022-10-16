var textArea = document.querySelector(".textarea");
var btnTranslate = document.querySelector("#translate-btn");
var outputArea = document.querySelector("#output");


var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
    return url + "?" + "text=" + text
}

function clickHandler() {
    var inputText = textArea.value;
    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            outputArea.innerText = json.contents.translated;
        })
}

btnTranslate.addEventListener("click", clickHandler);