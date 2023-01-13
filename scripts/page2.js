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
            returnTotal.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(num1Input,num2Input){
    var numbers = /^[0-9]+$/;
    if(num1Input.value.match(numbers)&&num2Input.value.match(numbers))
    {
        savedInput = num1Input.value;
        savedInput2 = num2Input.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/addingnumbers/adding/" + savedInput + '/' + savedInput2;
        urlCall(sayHelloUrl);
    }
    else 
    {
        returnTotal.textContent = 'Enter a valid response';
    }
    
}