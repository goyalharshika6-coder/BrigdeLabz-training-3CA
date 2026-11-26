// Q6 - Event Subscription Panel

$(document).ready(function () {

    // Function to attach events to each topic
    function attachEvents(topic) {

        // Subscribe to notifications
        topic.find(".subscribe").on("click", function () {

            const name = topic.find("span").text();

            topic.attr("data-subscribed", "true");

            $("#message").text(
                "Successfully subscribed to " + name
            ).show();

        });

        // Unsubscribe from notifications
        topic.find(".unsubscribe").on("click", function () {

            const name = topic.find("span").text();

            topic.attr("data-subscribed", "false");

            $("#message").text(
                "Unsubscribed from " + name
            ).show();

        });

        // Remove topic and detach its event handlers using .off()
        topic.find(".remove").on("click", function () {

            const name = topic.find("span").text();

            topic.find("button").off("click");

            topic.remove();

            $("#message").text(name + " removed successfully.").show();

        });

    }

    // Attach events to existing topics
    $(".topic").each(function () {

        attachEvents($(this));

    });

    // Add a new topic dynamically
    $("#addTopic").click(function () {

        const name = $("#newTopic").val().trim();

        if (name === "") {
            alert("Please enter a topic name.");
            return;
        }

        const topic = $("<div>").addClass("topic");

        topic.append($("<span>").text(name));

        topic.append('<button class="subscribe">Subscribe</button>');
        topic.append('<button class="unsubscribe">Unsubscribe</button>');
        topic.append('<button class="remove">Remove</button>');

        // Add new topic to the page
        $("#topics").append(topic);

        // Attach click events to the newly created topic
        attachEvents(topic);

        $("#newTopic").val("");

        $("#message").text("New topic added successfully.").show();

    });

});