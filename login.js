let myform = document.querySelector("#myform");
let Email = document.querySelector("#email");
let PASS = document.querySelector("#password");

myform.addEventListener("submit", function (event) {
    event.preventDefault();
    let userDetails = {
        Email: Email.value,
        pass: PASS.value,
    };
    let savedDetails = JSON.parse(localStorage.getItem("userDetails")); // Corrected the key name
    console.log(savedDetails);
    if ( userDetails.Email === savedDetails.Email && userDetails.pas === savedDetails.pass) {
        window.location.replace("./index.html");
    } else {
        alert("Wrong login or password.");
    }
});