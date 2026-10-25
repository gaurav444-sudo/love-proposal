const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const proposal = document.getElementById("proposal");
const success = document.getElementById("success");
const hint = document.getElementById("hint");

const messages = [
  "Are you sure shoona ji...? 🥺💖",
  "Ek baar aap aur soch lo shona ji..! 💕",
  "Please maan jao shoona..! 🥹",
  "hmara dil toot jayega shoona ji..! 🥺💔",
  "Last chance shoona ji..! 🌹💝"
];

let count = 0;

yesBtn.addEventListener("click", function () {
  proposal.classList.add("hidden");
  success.classList.remove("hidden");

  document.body.style.background =
    "linear-gradient(135deg, #ff1493, #ff69b4, #ffb6c1)";
});

noBtn.addEventListener("click", function () {
  hint.textContent =
    messages[Math.min(count, messages.length - 1)];

  count++;

  yesBtn.style.transform =
    `scale(${Math.min(1 + count * 0.08, 1.4)})`;

  if (count >= 3) {
    noBtn.textContent = "Think Again shoona ji🙈";
  }
});