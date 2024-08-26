function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  const apiKey = "7co4b937aee7400aa625c575fb0tc301";
  const context =
    "You are a aspiring chef and are looking for easy recipes to cook.";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Please wait,generating a recipe about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayRecipe);
}

let poemFormElement = document.querySelector("#recipe-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
