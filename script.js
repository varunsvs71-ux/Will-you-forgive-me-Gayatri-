document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");
  const photo = document.getElementById("couplePhoto");

  yesBtn.addEventListener("click", () => {
    message.innerText = "Thank you for giving me another chance ❤️ I promise to do better.";
    
    // SHOW PHOTO
    photo.style.display = "block";
  });

  function moveNoButton() {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
});