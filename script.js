import { initTheme } from './theme.js';

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');
const chatArea = document.querySelector('.chat-area');
const newChatButton = document.getElementById('new-chat-btn');

function addMessage(text, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
  const p = document.createElement('p');
  p.textContent = text;
  messageDiv.appendChild(p);
  chatArea.appendChild(messageDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function simulateBotResponse(userMessage) {
    addMessage('Réflexion...', false);
    // Replace with actual API call
    setTimeout(() => {
      const thinkingMessage = document.querySelector('.loading');
      thinkingMessage.remove();

      let botResponse = "Je suis un bot et j'ai reçu : " + userMessage;
      addMessage(botResponse, false);

    }, 1500); // Simulate delay
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        addMessage(message, true);
        messageInput.value = '';
        simulateBotResponse(message);
    }
});

messageInput.addEventListener('keypress', (e) => {
  if(e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendButton.click();
  }
})

newChatButton.addEventListener('click', () => {
  // Clear chat area and reset any state
  chatArea.innerHTML = '';
  // Add any initialization messages if needed
});

// Initialize theme
initTheme();
