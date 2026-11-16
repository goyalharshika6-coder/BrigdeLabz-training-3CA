const search = document.getElementById("search");
const rows = document.querySelectorAll("#studentList tr");
const result = document.getElementById("result");

// Search students
search.addEventListener("input", function () {

    let value = search.value.toLowerCase();
    let count = 0;

    rows.forEach(function (row) {

        let data = row.textContent.toLowerCase();

        if (data.includes(value)) {

            row.style.display = "";
            count++;

        } else {

            row.style.display = "none";

        }

    });

    // Check results
    if (count === 0) {
        result.textContent = "No results found";
    } else {
        result.textContent = "";
    }

});