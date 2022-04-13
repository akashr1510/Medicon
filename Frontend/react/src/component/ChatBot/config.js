// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';



const botName = 'DocsBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    userMessageBox:{
      backgroundColor: '#131217',
    },
    botMessageBox: {
      backgroundColor: '#131217',
    },
    chatButton: {
      backgroundColor: '#8a859e',
    },
  },
 
};

export default config;