let form = document.getElementById("form");
let message = document.getElementById("message");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    axios.get("http://localhost:3006/users?email=" + encodeURIComponent(email))

    .then(function(response) {

        if (response.data.length > 0) {

            message.textContent = "Email already registered.";

        } else {

            return axios.post("http://localhost:3006/users", {
                name: name,
                email: email
            });

        }

    })

    .then(function(response) {

        if (response) {

            message.textContent = "Registration successful!";

            form.reset();

        }

    })

    .catch(function() {

        message.textContent = "Something went wrong.";

    });

});