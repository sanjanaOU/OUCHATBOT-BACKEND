#  OU Chatbot – Backend

This is the backend server for the **Ask OU Chat** project – a university virtual assistant. The backend receives user messages from the frontend and forwards them to an LLM (LLaMA 3 via Ollama) for fallback responses when the local knowledge base doesn’t have an answer.


##  Features

- ⚡ Built with Express.js
- 🔄 Handles POST requests from frontend
- 🤖 Sends prompts to `llama3:latest` via Ollama (localhost)
- 🧩 Returns clean JSON replies to frontend
- 🔐 CORS and JSON parsing middleware enabled

---

##  Project Structure

ou-chatbot-backend/
├── index.js # Main backend server
├── package.json
├── .env # (Optional) Environment configs
└── README.md

##  Setup Instructions

### 1. Clone & Install

git clone https://github.com/your-username/ou-chatbot-backend.git
cd ou-chatbot-backend
npm install

### 2.Start Server
node index.js
Then backend will run on:
http://localhost:5000

Ensure Ollama is already running locally (port 11434), with LLaMA 3 pulled.

### SAMPLE OLLAMA COMMANDS

To run LLaMA 3 on Ollama:
ollama run llama3

To pull if not already available:
ollama pull llama3

### Dependencies
express
cors
axios
dotenv 









