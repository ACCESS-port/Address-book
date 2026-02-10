function login() {

    
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    
    if (user === "ALOK" && pass === "2007") {

        alert("Login Successful");

        window.location.href = "index.html";

    } else {

        document.getElementById("login-error").innerText =
            "Wrong username or password";
    }
}
