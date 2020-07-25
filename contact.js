function validate(){

    let btn = document.getElementById("submit");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name.value === "") {
        btn.style.display = "none";
    }

    if(email.value === "") {
        btn.style.display = "none";
    }

    if(message.innerHTML === "") {
        btn.style.display = "none";
    }

    if(name.value !== "" && email.value !== "" && message.innerHTML !== "") {
        btn.style.display = "block";
    }

};