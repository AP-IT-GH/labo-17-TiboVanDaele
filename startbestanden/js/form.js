const formEl = document.querySelector("#contactform");

formEl.addEventListener("submit", (e)=> {
    e.preventDefault();

    const errorEl = e.target.querySelector(".errors");
    const successEl = e.target.querySelector(".success");
    errorEl.innerHTML = "";
    successEl.innerHTML = "";

    console.log("Form has been submitted");
    //console.log("Form has been submitted", e.target[0].value);

    const nameVal = e.target.querySelector("#name").value;
    const emailVal= e.target.querySelector("#email").value;
    const messageVal= e.target.querySelector("#message").value;

    console.log(nameVal, emailVal, messageVal);

    if(!nameVal) {
        errorEl.innerHTML += "<p>The name field is empty!</p>"
    }

    if(!emailVal) {
        errorEl.innerHTML += "<p>The email field is empty!</p>"
    }

    if(!messageVal) {
        errorEl.innerHTML += "<p>The message field is empty!</p>"
    }

    if(nameVal && emailVal && messageVal){
        successEl.innerHTML= "<p>Your message was submitted</p>"
    }
});

