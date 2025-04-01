const form = document.getElementById("form");
const title = document.getElementById("title");
const year = document.getElementById("year");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  try {
    const requestBody = {
      title: titleInput.value,
      year: yearInput.value,
    };

    fetch("http://localhost:5050/movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        antwortFeld.innerText = JSON.stringify(data);
        console.log(data);
      });
  } catch (err) {
    console.log("fehler bei fetch: " + err);
  }
});

window.onload = () => {
  fetch("http://localhost:5050/movie")
    .then((res) => res.json())
    .then((data) => {
      antwortFeld.innerText = JSON.stringify(data);
    });
};
