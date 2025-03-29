import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  InfoButton,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const sendMessage = (text) => {
    const message = {
      direction: "outgoing",
      message: text,
      sentTime: new Date().toLocaleTimeString(),
      sender: "Joe",
    };
    const reply = {
      direction: "incoming",
      message: "Hi, how can I help you?",
      sentTime: new Date().toLocaleTimeString(),
      sender: "Emily",
    };

    setMessages((currentMessages) => [...currentMessages, message]);
    setTyping(true);
    setTimeout(() => {
      setMessages((currentMessages) => [...currentMessages, reply]);
      setTyping(false);
    }, 2000);
  };

  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px" }}>
      <MainContainer
        style={{
          height: "500px",
          width: "400px",
          backgroundColor: "transparent",
        }}
      >
        <ChatContainer color="#434651">
          <ConversationHeader>
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
            <ConversationHeader.Content info="Online" userName="Soujannya" />
            <ConversationHeader.Actions>
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>

          <MessageList
            typingIndicator={
              typing && <TypingIndicator content="Soujannya is typing" />
            }
          >
            {messages.map((msg) => (
              <Message model={msg} />
            ))}
          </MessageList>
          <MessageInput
            attachButton={false}
            onSend={(_, text) => sendMessage(text)}
            placeholder="Type message here"
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;
