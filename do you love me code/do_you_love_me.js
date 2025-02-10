const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes") || document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of no button
noBtn.addEventListener("mouseover", () => {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;
  
  const newX = Math.min(Math.floor(Math.random() * maxX), maxX);
  const newY = Math.min(Math.floor(Math.random() * maxY), maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    
    if (gifResult) {
      gifResult.play();
    }
  }, 3000);
});
