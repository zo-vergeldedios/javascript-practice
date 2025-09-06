const image = document.getElementById("image");
const button = document.getElementById("dogBtn");
const dogmessage = document.getElementById("dogp");

async function getImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Network response not ok");
    }

    const dogImage = await response.json();
    image.setAttribute("src", dogImage.message);
    image.hidden = false;
  } catch (error) {
    dogmessage.textContent = "Oops! Couldn't get the image.";
    console.log(error);
  }
}

button.addEventListener("click", getImage);
