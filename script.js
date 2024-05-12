document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== "") {
            appendUserMessage(message);
            setTimeout(function() {
                // Todo : Add Api Call
            }, 500);
            userInput.value = "";
        }
    }

    function appendUserMessage(message) {
        const messageContainer = createMessageContainer("user-message");
        const avatar = createAvatar("user-avatar", "User");
        const messageElement = createMessageElement(message, "message user-message");
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageElement);
        chatBox.appendChild(messageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendBotMessage(message) {
        const messageContainer = createMessageContainer("bot-message");
        const avatar = createAvatar("bot-avatar", "AI");
        const messageElement = createMessageElement(message, "message bot-message");
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(messageElement);
        chatBox.appendChild(messageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function createMessageContainer(className) {
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";
        return messageContainer;
    }

    function createAvatar(className, name) {
        const avatar = document.createElement("div");
        avatar.className = "avatar " + className;
        avatar.innerText = name.charAt(0);
        return avatar;
    }

    function createMessageElement(message, className) {
        const messageElement = document.createElement("div");
        messageElement.className = className;
        messageElement.innerText = message;
        return messageElement;
    }
});