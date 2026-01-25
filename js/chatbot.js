
const bot = document.getElementById("artBot");
const body = document.getElementById("artBotBody");

/* AVAILABLE QUESTIONS + ANSWERS */
const knowledgeBase = {
  "artists": "We feature emerging and professional artists from different styles.",
  "artist": "Click on any artwork card to see artist details.",
  "sachin": "Sachin is well known artist.",
  "art styles": "We showcase sketches, wall paintings, and digital art.",
  "sketch": "Sketches are pencil-based artworks focusing on form and expression.",
  "wall painting": "Wall paintings are large-scale artworks created on walls.",
  "contact": "You can contact the artist via Instagram links on their profile.",
  "gallery": "This gallery showcases curated artworks and team members."
};

/* SUGGESTIONS */
const suggestions = [
  "Who are the artists?",
  "What art styles are available?",
  "Tell me about sketches",
  "How to contact an artist?",
  "What is this gallery?"
];

/* TOGGLE */
function toggleBot() {
  bot.style.display = bot.style.display === "flex" ? "none" : "flex";
}

/* HANDLE INPUT */
function handleBotInput(e) {
  if (e.key !== "Enter" || !e.target.value.trim()) return;

  const userText = e.target.value.toLowerCase();
  addMessage(e.target.value, "user");
  e.target.value = "";

  let reply = null;

  for (let key in knowledgeBase) {
    if (userText.includes(key)) {
      reply = knowledgeBase[key];
      break;
    }
  }

  if (!reply) {
    reply =
      "Sorry 😔 I don’t have enough info on that.\n\nYou can ask:\n• " +
      suggestions.join("\n• ");
  }

  setTimeout(() => addMessage(reply, "bot"), 400);
}

/* MESSAGE UI */
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = "bot-msg";
  msg.style.alignSelf = type === "user" ? "flex-end" : "flex-start";
  msg.style.background =
    type === "user"
      ? "rgba(255,255,255,0.25)"
      : "rgba(255,255,255,0.12)";
  msg.innerText = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

