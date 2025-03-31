const form = getElementByID("form");
const title = getElementByID("title");
const year = getElementByID("year");

form.eventListener("submit", (event) => {
  event.preventDefault();

  fetch("http://localhost:5050/movie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: titleInput.value, year: yearInput.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      answerFeld.innerText = data;
    });
});
