function quickTest() {
  let name = prompt("What is your first name?");
  let location = prompt("What is your location?");
  let visit = prompt("Do you love visiting the Art Gallery?");
  let heading = document.querySelector("h2");

  if (visit === "yes") {
    heading.innerHTML =
      "😎 <br/>Welldone... " + name + "" + " You enjoyed the view right ? 👍";
  } else {
    heading.innerHTML =
      "😮 <br/>" +
      name +
      " ...You are missing out" +
      " do check out one in " +
      location +
      " 🤗";
  }
}
let quickButton = document.querySelector("button");
quickButton.addEventListener("click", quickTest);
