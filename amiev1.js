const input = document.getElementById("chat-input");
const output = document.getElementById("chat-output");

function displayMessage(sender, message) {
  const entry = document.createElement("div");
  entry.textContent = `${sender}: ${message}`;
  output.appendChild(entry);
  output.scrollTop = output.scrollHeight;
}

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;
  displayMessage("You", message);
  displayMessage("Fixture", message);
  input.value = "";
  input.focus();
}

document.getElementById("send-button").addEventListener("click", sendMessage);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") sendMessage();
});
document.getElementById("reset-chat").addEventListener("click", () => {
  output.replaceChildren();
  input.value = "";
  input.focus();
});
