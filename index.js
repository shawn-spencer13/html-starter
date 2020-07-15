const page2Button = document.getElementById("page2Button");
const rangeInput = document.getElementById("rangeInput");

page2Button.onclick = () => {
  window.location.href = "/page2.html";
};

window.addEventListener("DOMContentLoaded", () => {
  rangeInput.addEventListener("change", e => {
    // console.log(e.target.value);
  });
});
