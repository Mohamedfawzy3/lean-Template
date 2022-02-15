let icon = document.querySelector(".icon");

icon.addEventListener("click", function () {
  let links = document.querySelector("ul");

  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
