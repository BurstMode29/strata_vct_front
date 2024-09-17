import React, { useState } from 'react';
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from '@chatscope/chat-ui-kit-react';

import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can I help you today?",
      sentTime: "just now",
      sender: "Chatbot",
    },
  ]);

  const handleSend = (message) => {
    setMessages([...messages, { message, sentTime: "just now", sender: "User" }]);
  };

  return (
    <ChatContainer className={styles.ChatContainer}>
      <ConversationHeader className={styles.ConversationHeader}>
        <ConversationHeader.Content userName="Chatbot" />
      </ConversationHeader>
      <MessageList>
        {messages.map((msg, index) => (
          <Message
            key={index}
            model={{
              message: msg.message,
              sentTime: msg.sentTime,
              sender: msg.sender,
            }}
          />
        ))}
      </MessageList>
      <MessageInput
        className={styles.MessageInput}
        placeholder="Type message here..."
        onSend={handleSend}
      />
    </ChatContainer>
  );
};

export default ChatComponent;
