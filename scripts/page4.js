let num1Input = document.getElementById('num1Input');
let num2Input = document.getElementById('num2Input');
let returnTotal = document.getElementById('returnTotal');
let helloSubBtn = document.getElementById('helloSubBtn');

// console.log(nameInput,helloReturn,helloSubBtn);
let savedInput = 0;
let savedInput2 = 0;
let sayHelloUrl = '';



helloSubBtn.addEventListener('click', function () {
    helloApi(num1Input,num2Input);
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            returnTotal.textContent = data
        }
    )
}

function helloApi(num1Input,num2Input){
        savedInput = num1Input.value;
        savedInput2 = num2Input.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/greaterthanlessthan/greaterless/" + savedInput + '/' + savedInput2;
        urlCall(sayHelloUrl);
    
}