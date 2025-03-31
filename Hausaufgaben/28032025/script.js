const form = getElementByID("form");
const name = getElementByID("name");
const art = getElementByID("art");

form.eventListener("submit", (event) => {
  event.preventDefault();

  fetch("http://localhost:5050/movie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nameInput.value, art: artInput.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      antwortFeld.innerText = data;
    });
});
