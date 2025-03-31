const form = getElementByID("form");
const name = getElementByID("name");
const art = getElementByID("art");

form.eventListener("submit", (event) => {
  event.preventDefault();
});
