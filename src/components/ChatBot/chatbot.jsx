import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Theme configuration for styling
const theme = {
    background: '#F0F8FF',
    headerBgColor: '#004085',
    headerFontColor: '#fff',
    headerFontSize: '18px',
    botBubbleColor: '#004085',
    botFontColor: '#fff',
    userBubbleColor: '#007bff',
    userFontColor: '#fff',
};

// Chatbot steps
const steps = [
    {
        id: '0',
        message: 'Hey Geek! Welcome to GeekBot.',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Please enter your username:',
        trigger: 'usernameInput',
    },
    {
        id: 'usernameInput',
        user: true, // Captures user input
        trigger: '2',
    },
    {
        id: '2',
        message: ({ previousValue }) => `Hi ${previousValue}! How can I help you today?`,
        trigger: 'options',
    },
    {
        id: 'options',
        options: [
            { value: 'courses', label: 'View Courses', trigger: '3' },
            { value: 'articles', label: 'Read Articles', trigger: '4' },
        ],
    },
    {
        id: '3',
        message: 'Here are some courses for you!',
        end: true,
    },
    {
        id: '4',
        message: 'Here are some articles for you!',
        end: true,
    },
];

// Chatbot component
const Chatbot = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="GeekBot"
                    steps={steps}
                    botAvatar="img.png" // Replace with the path to your bot avatar
                    userAvatar="user.png" // Replace with the path to the user's avatar
                />
            </ThemeProvider>
        </div>
    );
};

export default Chatbot;
