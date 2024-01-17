const form = document.getElementById("form");

form.addEventListener("submit", function() {
    const formData = new FormData(form);
    var fields = {};
    formData.forEach((value, key) => {
        fields[key] = value;
    });
})
var json = JSON.stringify(fields);


// ACCESS KEY: ad474a83-bf6c-479b-9d45-ea302a1fb35f

// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//     fields.fullName = document.getElementById("name");
// })

// class User {
//     constructor(fullName, email, phoneNumber, message){
//         this.fullName = fullName;
//         this.email = email;
//         this.phoneNumber = phoneNumber;
//         this.message = message;
//     }
//     constructor(fullName, email, message){
//         this.fullName = fullName;
//         this.email = email;
//         this.phoneNumber = 'N/A';
//         this.message = message;
//     }
// }

// function sendMessage() {

// }