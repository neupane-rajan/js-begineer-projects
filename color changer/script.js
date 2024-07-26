const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const colorMap = {
  grey: "white",
  white: "black",
  blue: "white",
  yellow: "black",
};

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // Get the id of the clicked button (which is the background color)
    const bgColor = e.target.id;
    const textcolor = colorMap[bgColor] || "black"; //Default to back if color is not there
    body.style.backgroundColor = bgColor;
    body.style.color = textcolor;
  });
});
