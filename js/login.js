loginButton.addEventListener("click",
  function getInfo() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    for(i = 0; i < loginValues.length; i++) {
      if (username == loginValues[i].username && password == loginValues[i].password) {
        window.location.href = "childPages\\main.html";
        var loggedIn = true;
        localStorage.setItem("loggedIn", loggedIn);
        return;
      } else if (username == registeredUsername && password == registeredPassword) {
          window.location.href = "childPages\\main.html";
          var loggedIn = true;
          localStorage.setItem("loggedIn", loggedIn);
          return;
      }
    }
  }
);
if (loggedIn == "true") {
  window.location.replace("childPages\\main.html");
}
