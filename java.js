const form = document.getElementById("form");

form.addEventListener("submit", function() {
    const formData = new FormData(form);
    var fields = {};
    formData.forEach((value, key) => {
        fields[key] = value;
    });
})
var json = JSON.stringify(fields);

fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": ""
    }
})

// ACCESS KEY: ad474a83-bf6c-479b-9d45-ea302a1fb35f