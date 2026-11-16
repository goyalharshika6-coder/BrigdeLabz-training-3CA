const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add new product
addButton.addEventListener("click", function () {

    let productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter product name");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = productName;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.append(span, editButton, deleteButton);
    productList.appendChild(li);

    productInput.value = "";
});

// Event delegation
productList.addEventListener("click", function (event) {

    let li = event.target.closest("li");

    if (!li) return;

    if (event.target.textContent === "Delete") {
        li.remove();
    }

    if (event.target.textContent === "Edit") {

        let span = li.querySelector("span");
        let input = document.createElement("input");

        input.value = span.textContent;
        span.replaceWith(input);
        input.focus();

        function saveEdit() {
            if (!input.isConnected) return;

            let newSpan = document.createElement("span");
            newSpan.textContent = input.value;
            input.replaceWith(newSpan);
        }

        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                saveEdit();
            }
        });

        document.addEventListener("click", function outsideClick(e) {
            if (!li.contains(e.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }
        });
    }
});