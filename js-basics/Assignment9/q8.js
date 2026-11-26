// Q8 - Dynamic Blog Posts

$(document).ready(function () {

    let postNumber = 5;

    // Add a new post at the end using append()
    $("#addPost").click(function () {

        postNumber++;

        const newPost = `
            <article class="post">
                <h3>New Blog Post ${postNumber}</h3>
                <p>This is a newly added blog post.</p>
            </article>
        `;

        $("#posts").append(newPost);

    });

    // Add featured post at the beginning using prepend()
    $("#prependPost").click(function () {

        const featuredPost = `
            <article class="post highlight">
                <h3>Featured Blog Post</h3>
                <p>This is our featured article.</p>
            </article>
        `;

        $("#posts").prepend(featuredPost);

    });

    // Remove the last post
    $("#removePost").click(function () {

        $("#posts .post").last().remove();

    });

    // Add tags before and after paragraph using before() and after()
    $("#addTags").click(function () {

        $(".post").each(function () {

            const paragraph = $(this).find("p");

            // Avoid adding duplicate tags
            if (!paragraph.prev().hasClass("tag")) {

                paragraph.before("<span class='tag'>BLOG</span> ");

                paragraph.after(" <span class='tag'>#Learning</span>");

            }

        });

    });

    // Highlight posts containing specific keywords
    $("#highlight").click(function () {

        $(".post").each(function () {

            const text = $(this).text().toLowerCase();

            if (text.includes("javascript") || text.includes("cloud")) {

                $(this).css("background-color", "yellow");

            } else {

                $(this).css("background-color", "");

            }

        });

    });

});