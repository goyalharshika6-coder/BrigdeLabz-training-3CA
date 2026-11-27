$(document).ready(function() {

    loadTasks();

    $("#filter").change(function() {
        loadTasks();
    });


    function loadTasks() {

        let value = $("#filter").val();

        let url = "http://localhost:3003/tasks";

        if (value === "completed") {
            url += "?completed=true";
        } else if (value !== "") {
            url += "?priority=" + value;
        }

        $.ajax({
            url: url,
            method: "GET",

            success: function(data) {

                $("#tasks").html("");

                if (data.length === 0) {
                    $("#tasks").html("No tasks found");
                }

                data.forEach(function(task) {

                    $("#tasks").append(`
                        <div>
                            <input type="checkbox"
                                class="complete"
                                data-id="${task.id}"
                                ${task.completed ? "checked" : ""}>

                            <span>${task.title}</span>
                            <p>Priority: ${task.priority}</p>
                            <hr>
                        </div>
                    `);

                });

            }
        });

    }


    $("#tasks").on("change", ".complete", function() {

        let id = $(this).data("id");

        let completed = $(this).prop("checked");

        $.ajax({
            url: "http://localhost:3003/tasks/" + id,
            method: "PATCH",
            contentType: "application/json",

            data: JSON.stringify({
                completed: completed
            }),

            success: function() {
                loadTasks();
            }

        });

    });

});