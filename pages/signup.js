var SignUp = {
    template:`
        <div class="container">
            <header class="top">
                <h1 class="top-link">Sign up</h1>
            </header>

            <form name="nameForm" onsubmit="return loadName()" method="POST">
                <label>Name</label><br />
                <input type="text" name="name" id="name" minlength="2" pattern="[A-Za-z]+" required>
                
                <br /><br />

                <div class="error" id="fname-tooShort"></div>
                <div class="error" id="fname-pattern"></div>
                <div class="error" id="fname-missing"></div>

                <br /><br />

                <label>E-mail</label><br />
                <input type="email" name="email" id="email" minlength="2" required>
                
                <br /><br />

                <div class="error" id="email-tooShort"></div>
                <div class="error" id="email-pattern"></div>
                <div class="error" id="email-missing"></div>
                
                <br /><br />

                <button type="submit" onclick="validateForm()">Submit</button>
            </form>
        </div>
    `
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    var txt1 = "";
    var txt2 = "";
    var txt3 = "";
    var txt4 = "";
    var txt5 = "";
    var txt6 = "";

    if (document.getElementById("name").validity.tooShort) {
        txt1 = "Name is too short";
    } if(document.getElementById("name").validity.patternMismatch) {
        txt2 = "Must not contain numbers or symbols";
    } if(document.getElementById("name").validity.valueMissing) {
        txt3 = "Name is required";
    } if(document.getElementById("email").validity.tooShort) {
        txt4 = "E-mail is too short";
    } if(validateEmail(document.getElementById("email")) === false) {
        txt5 = "Must be a valid E-mail address";
    } if(document.getElementById("email").validity.valueMissing) {
        txt6 = "E-mail is required";
    }
    document.getElementById("fname-tooShort").innerHTML = txt1;
    document.getElementById("fname-pattern").innerHTML = txt2;
    document.getElementById("fname-missing").innerHTML = txt3;
    document.getElementById("email-tooShort").innerHTML = txt4;
    document.getElementById("email-pattern").innerHTML = txt5;
    document.getElementById("email-missing").innerHTML = txt6;

}

window.onload = function() {
    const element = document.getElementById('nameDisplay').innerHTML;
    console.log(element);
}

function loadName() {
    if (element) {
        router.push({ path: '/' });
    } else {
        alert("NOPE");
    }
}