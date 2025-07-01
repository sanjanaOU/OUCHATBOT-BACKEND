// index.js 
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3:latest',
      prompt: message,
      stream: false
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json({ reply: response.data.response });
  } catch (error) {
    console.error('Ollama Error:', error.message);
    res.status(500).json({ reply: 'Failed to reach GPT. Try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
