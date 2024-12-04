import React, { useState } from 'react';
import Navbar from "../../Navbar/Navbar";


import axios from 'axios';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/system';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: 'user', message: userMessage },
    ]);
    setUserMessage('');
    setLoading(true);

    try {
      // Send message to backend and get the response
      const response = await axios.post('http://127.0.0.1:5001/api/chat', {
        message: userMessage,
      });

      // Add bot's response to chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: response.data.response },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (<>
    <Navbar />
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto', backgroundColor: '#f4f6f8', borderRadius: '8px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1976d2' }}>
       SLIETSHOP BOT
      </Typography>

      <Paper sx={{ padding: 2, maxHeight: 400, overflowY: 'auto', marginBottom: 2, borderRadius: '12px' }}>
        <List>
          {chatHistory.map((entry, index) => (
            <ListItem
              key={index}
              sx={{
                textAlign: entry.sender === 'user' ? 'right' : 'left',
                padding: '8px 0',
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      color: entry.sender === 'user' ? '#1976d2' : '#4caf50',
                      fontWeight: entry.sender === 'user' ? 'bold' : 'normal',
                    }}
                  >
                    <strong>{entry.sender === 'user' ? 'You' : 'Bot'}: </strong>
                    {entry.message}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          label="Type a message..."
          variant="outlined"
          value={userMessage}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: 1,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{
            height: '56px',
            backgroundColor: '#1976d2',
            borderRadius: '8px',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Chat;
