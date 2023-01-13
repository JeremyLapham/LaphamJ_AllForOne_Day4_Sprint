let nameInput = document.getElementById('nameInput');
let helloReturn = document.getElementById('helloReturn');
let helloSubBtn = document.getElementById('helloSubBtn');
let restaurantTypeBtn = document.getElementById('restaurantTypeBtn');

// console.log(nameInput,helloReturn,helloSubBtn);
let restaurantType = '';
let savedInput = '';
let sayHelloUrl = '';




restaurantTypeBtn.addEventListener('change', function() {
    restaurantType = restaurantTypeBtn.value;
})

helloSubBtn.addEventListener('click', function () {
    helloApi(restaurantType);
    console.log(restaurantType);
});
function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data
            console.log(data);
        }
    )
}

function helloApi(restaurantType){
    
        savedInput = restaurantType.value;
        sayHelloUrl = "https://allforonewebapijeremy1.azurewebsites.net/restaurantpicker/resturantpicker/" + restaurantType;
        urlCall(sayHelloUrl);
}
// Isaiah Helped me