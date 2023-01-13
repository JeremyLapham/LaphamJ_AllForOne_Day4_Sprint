let num1Input = document.getElementById('num1Input');
let returnTotal = document.getElementById('returnTotal');
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
    var numbers = /[0-9]+$/;
    if(num1Input.value.match(numbers))
    {
        savedInput = num1Input.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/OddOrEven/OddEven/" + savedInput;
        urlCall(sayHelloUrl);
    }
    else{
        returnTotal.textContent = 'Enter a valid response'
    }
}