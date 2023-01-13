let word1 = document.getElementById("word1");
let word2 = document.getElementById("word2");
let word3 = document.getElementById("word3");
let word4 = document.getElementById("word4");
let word5 = document.getElementById("word5");
let word6 = document.getElementById("word6");
let word7 = document.getElementById("word7");
let word8 = document.getElementById("word8");
let word9 = document.getElementById("word9");
let word10 = document.getElementById("word10");
let word11 = document.getElementById("word11");
let word12 = document.getElementById("word12");
let word13 = document.getElementById("word13");
let word14 = document.getElementById("word14");
let returnTotal = document.getElementById("returnTotal");
let helloSubBtn = document.getElementById("helloSubBtn");

// console.log(nameInput,helloReturn,helloSubBtn);
let savedInput1 = "";
let savedInput2 = "";
let savedInput3 = "";
let savedInput4 = "";
let savedInput5 = "";
let savedInput6 = "";
let savedInput7 = "";
let savedInput8 = "";
let savedInput9 = "";
let savedInput10 = "";
let savedInput11 = "";
let savedInput12 = "";
let savedInput13 = "";
let savedInput14 = "";
let sayHelloUrl = "";

helloSubBtn.addEventListener("click", function () {
    helloApi(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14);
});

function urlCall(url) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            returnTotal.textContent = data;
        });
}

function helloApi(word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12, word13, word14) {
    savedInput1 = word1.value;
    savedInput2 = word2.value;
    savedInput3 = word3.value;;
    savedInput4 = word4.value;;
    savedInput5 = word5.value;;
    savedInput6 = word6.value;;
    savedInput7 = word7.value;;
    savedInput8 = word8.value;;
    savedInput9 = word9.value;;
    savedInput10 = word10.value;;
    savedInput11 = word11.value;;
    savedInput12 = word12.value;;
    savedInput13 = word13.value;;
    savedInput14 = word14.value;;
    sayHelloUrl =
        "https://allforonewebapijeremy1.azurewebsites.net/madlibs/madlib/" + savedInput1 + "/" + savedInput2 + '/' + savedInput3 + "/" + savedInput4 + '/' + savedInput5 + "/" + savedInput6 + '/' + savedInput7 + "/" + savedInput8 + '/' + savedInput9 + "/" + savedInput10 + '/' + savedInput11 + "/" + savedInput12 + '/' + savedInput13 + "/" + savedInput14;
    urlCall(sayHelloUrl);
}
