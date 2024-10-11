import React, { useState } from 'react';
import axios from 'axios';
import "./chatbot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        const newMessage = { sender: 'user', text: input };
        setMessages([...messages, newMessage]);

        try {
            const response = await axios.post('http://localhost:5001/chat', { message: input });
            const botReply = { sender: 'bot', text: response.data.response };
            setMessages([...messages, newMessage, botReply]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
