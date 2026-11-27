let day = document.getElementById("day");
let timetable = document.getElementById("timetable");

function loadTimetable() {

    let selectedDay = day.value;

    fetch("http://localhost:3005/timetable?day=" + selectedDay)

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        timetable.innerHTML = "";

        if (data.length === 0) {
            timetable.innerHTML = "<h3>No classes today.</h3>";
        } else {

            data.forEach(function(item) {

                let div = document.createElement("div");

                div.innerHTML = `
                    <h3>${item.subject}</h3>
                    <p>Faculty: ${item.faculty}</p>
                    <p>Time: ${item.time}</p>
                    <hr>
                `;

                timetable.appendChild(div);

            });

        }

    })

    .catch(function() {
        timetable.innerHTML = "Something went wrong";
    });

}

day.addEventListener("change", loadTimetable);

loadTimetable();