let num1Input = document.getElementById('num1Input');
let helloReturn = document.getElementById('helloReturn');
let helloSubBtn = document.getElementById('helloSubBtn');

// console.log(nameInput,helloReturn,helloSubBtn);
let savedInput = '';
let sayHelloUrl = '';



helloSubBtn.addEventListener('click', function () {
    helloApi(num1Input);
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            returnTotal.textContent = data
            console.log(data);
        }
    )
}

function helloApi(num1Input){
        savedInput = num1Input.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/ReverseIt/ReverseIt/" + savedInput;
        urlCall(sayHelloUrl);
}