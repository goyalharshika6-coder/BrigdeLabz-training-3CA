let container = document.getElementById("employees");
let message = document.getElementById("message");

let xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3002/employees");

xhr.onload = function() {

    let employees = JSON.parse(xhr.responseText);

    employees.forEach(function(emp) {

        let div = document.createElement("div");

        div.innerHTML = `
            <h3>${emp.name}</h3>
            <span>${emp.status}</span>
            <button>Toggle Status</button>
            <hr>
        `;

        let button = div.querySelector("button");

        button.addEventListener("click", function() {
            updateStatus(emp, div);
        });

        container.appendChild(div);

    });

};

xhr.send();


function updateStatus(emp, div) {

    let oldStatus = emp.status;

    let newStatus = oldStatus === "active" ? "inactive" : "active";

    emp.status = newStatus;

    div.querySelector("span").textContent = newStatus;

    let xhr = new XMLHttpRequest();

    xhr.open("PATCH", "http://localhost:3002/employees/" + emp.id);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {

        if (xhr.status < 200 || xhr.status >= 300) {
            emp.status = oldStatus;
            div.querySelector("span").textContent = oldStatus;
            message.textContent = "Failed to update status";
        } else {
            message.textContent = "";
        }

    };

    xhr.onerror = function() {

        emp.status = oldStatus;
        div.querySelector("span").textContent = oldStatus;
        message.textContent = "Something went wrong";

    };

    xhr.send(JSON.stringify({
        status: newStatus
    }));

}