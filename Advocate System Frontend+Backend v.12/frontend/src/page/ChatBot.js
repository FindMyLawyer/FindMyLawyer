import React, { useState } from 'react';
import Fuse from 'fuse.js';
import './ChatBot.css';

// Define your question-answer pairs
const qaPairs = [
  { question: "how to make an appointment", answer: "To make an appointment, go to the 'Appointments' section on our website and select 'Book Appointment'." },
  { question: "what is your working hours", answer: "Our working hours are from 9 AM to 6 PM, Monday through Friday." },
  { question: "how can i contact support", answer: "You can contact support by emailing support@example.com or calling 123-456-7890." },
  { question: "hi", answer: "Hello! How can I assist you today?" },
  { question: "default", answer: "I'm not sure how to answer that. Could you please rephrase?" }
];

const fuse = new Fuse(qaPairs, {
  keys: ['question'],
  threshold: 0.3, // Adjust the threshold for fuzzy matching
});

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const result = fuse.search(input.toLowerCase());
        const response = result.length > 0 ? result[0].item.answer : qaPairs.find(pair => pair.question === 'default').answer;
        addMessage(response);
      }, 1000); // 1-second delay to simulate typing effect
    }
  };

  const addMessage = (text) => {
    setIsTyping(false);
    let index = 0;
    const speed = 50; // Typing speed in ms
    const typingMessage = { text: '', user: false };
    setMessages((prevMessages) => [...prevMessages, typingMessage]);

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        typingMessage.text += text[index];
        index++;
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), typingMessage]);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
  };

  return (
    <div className="chatbot mt-5">
      <div className="card-header" style={{ backgroundColor: "#3282b8", color: "#fff" }}>
        <h5 className="card-title text-center">Chat with AI Assistant</h5>
      </div>
      <div className="chatbot-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user-message' : 'bot-message'}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="message bot-message typing">Typing...</div>}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
