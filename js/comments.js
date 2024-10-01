const commentsSection = document.getElementById("comments");
const publishButton = document.getElementById("publish");
const commentsForm = document.getElementById("comment-form");

const errorMessageText = document.getElementById("error-message");

publishButton.addEventListener("click", (form) => {
    errorMessageText.innerText = "";
    if (commentsForm[0].value == "" || commentsForm[1].value == "" || commentsForm[2].value == "") {
        errorMessageText.innerText = "Alle velden moeten ingevuld zijn!";
    } else {
        commentsForm.insertAdjacentHTML("afterend",
            `<hr />
            <article id="published-comment">
                <h3>@${commentsForm[0].value}</h3>
                <h4><a href="mailto:${commentsForm[1].value}" target="_blank">${commentsForm[1].value}</a></h4>
                <p>${commentsForm[2].value}</p>
            </article>`);
        
        commentsForm.reset();
    }

    form.preventDefault();
});