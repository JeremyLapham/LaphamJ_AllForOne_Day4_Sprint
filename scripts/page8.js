let nameInput = document.getElementById('nameInput');
let lastNameInput = document.getElementById('lastNameInput');
let slackNameInput = document.getElementById('slackNameInput');
let emailInput = document.getElementById('emailInput');

let firstNameReturn = document.getElementById('firstNameReturn');
let lastNameReturn = document.getElementById('lastNameReturn');
let slackNameReturn = document.getElementById('slackNameReturn');
let emailReturn = document.getElementById('emailReturn');
let hobbiesReturn = document.getElementById('hobbiesReturn');
let helloSubBtn = document.getElementById('helloSubBtn');

let savedInput = '';
let sayHelloUrl = '';



nameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        helloApi(nameInput);
    }
});

lastNameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        lastNameCall(lastNameInput);
    }
});

slackNameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        slackNameCall(slackNameInput);
    }
});

emailInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        emailCall(emailInput);
    }
});

helloSubBtn.addEventListener('click', function () {
    firstNameReturn.textContent = 'Next time hit Enter like it says';
    lastNameReturn.textContent = '';
    slackNameReturn.textContent = '';
    emailReturn.textContent = '';
    hobbiesReturn.textContent = '';

})

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            firstNameReturn.textContent = data.firstName;
            lastNameReturn.textContent = data.lastName;
            slackNameReturn.textContent = data.slackName;
            emailReturn.textContent = data.email;
            hobbiesReturn.textContent = data.hobbies;
        }
    )
}

function helloApi(nameInput) {
    var letters = /^[A-Za-z-]+$/;
    if (nameInput.value.match(letters)) {
        savedInput = nameInput.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/Directory/GetStudentByFirstName/" + savedInput;
        urlCall(sayHelloUrl);
    }
    else {
        firstNameReturn.textContent = 'Enter a valid response';
        lastNameReturn.textContent = '';
        slackNameReturn.textContent = '';
        emailReturn.textContent = '';
        hobbiesReturn.textContent = '';
    }
}

function urlCall2(url2) {
    fetch(url2).then(
        response => response.json()
    ).then(
        data => {
            firstNameReturn.textContent = data.firstName;
            lastNameReturn.textContent = data.lastName;
            slackNameReturn.textContent = data.slackName;
            emailReturn.textContent = data.email;
            hobbiesReturn.textContent = data.hobbies;
        }
    )
}

function lastNameCall(lastNameInput) {
    var letters = /^[A-Za-z-]+$/;
    if (lastNameInput.value.match(letters)) {
        savedInput = lastNameInput.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/Directory/GetStudentByLastName/" + savedInput;
        urlCall2(sayHelloUrl);
    }
}

function urlCall3(url3) {
    fetch(url3).then(
        response => response.json()
    ).then(
        data => {
            firstNameReturn.textContent = data.firstName;
            lastNameReturn.textContent = data.lastName;
            slackNameReturn.textContent = data.slackName;
            emailReturn.textContent = data.email;
            hobbiesReturn.textContent = data.hobbies;
        }
    )
}

function slackNameCall(emailInput) {
    savedInput = emailInput.value;
    sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/Directory/GetStudentBySlackName/" + savedInput;
    urlCall3(sayHelloUrl)
}

function urlCall4(url4) {
    fetch(url4).then(
        response => response.json()
    ).then(
        data => {
            firstNameReturn.textContent = data.firstName;
            lastNameReturn.textContent = data.lastName;
            slackNameReturn.textContent = data.slackName;
            emailReturn.textContent = data.email;
            hobbiesReturn.textContent = data.hobbies;
        }
    )
}

function emailCall(emailInput) {
    savedInput = emailInput.value;
    sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/Directory/GetStudentByEmail/" + savedInput;
    urlCall4(sayHelloUrl)
}
