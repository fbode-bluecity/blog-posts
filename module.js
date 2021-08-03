
// Function to shorten text and trailing dots
const formatText = (text, len=150) => {
    // Remove leading and trailing whitespaces
    let text_trim = text.trim();

    // if the text is longer than len (150)
    if (text_trim.length > len) {
        // if sliced at whitespace
        if (text_trim.slice(len-1, len) == " ") {
            text_trim = text_trim.slice(0,len) + "...";
        } else {
            // find the closest previous whitespace
            let new_len = len;
            while (text_trim.slice(new_len-1, new_len) != " ") {
                new_len = new_len-1;
            }

            // Slice text at new index
            text_trim = text_trim.slice(0, new_len) + "...";
        }
    }

    return text_trim;
}

// Find all Blog-post body texts
let body_elements = document.querySelectorAll(".blog-post__body");

// Iterate over texts and format
for (let i = 0; i < body_elements.length; i++) {
    body_elements[i].innerText = formatText(body_elements[i].innerText);
}

let post_status = document.createElement("div");
post_status.className = "blog-post__status"
post_status.innerText = "nyt";

let first_blog_entry = document.querySelector(".blog-post");
let first_blog_thumb = first_blog_entry.querySelector(".blog-post__link");

first_blog_entry.insertBefore(post_status, first_blog_thumb);