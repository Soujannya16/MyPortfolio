import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator,
  ArrowButton,
} from "@chatscope/chat-ui-kit-react";
import ReactMarkdown from "react-markdown";
import "./chat.scss";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

const avatarUrl = `${process.env.PUBLIC_URL}/images/myAvatar.jpg`;

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      //if chat window is closed
      logEvent(analytics, "Chat Bot", {
        chat: "Closed",
      });
    } else {
      //if chat window is opened
      logEvent(analytics, "Chat Bot", {
        chat: "Opened",
      });
      setOpenedOnce(true);
    }
  };

  const onReply = async (res) => {
    const json = await res.json();
    const reply = {
      direction: "incoming",
      type: "html",
      message: json.reply,
      sentTime: new Date().toLocaleTimeString(),
    };
    setMessages((currentMessages) => [...currentMessages, reply]);
    setTyping(false);
  };

  const onError = (error) => {
    console.error("Error:", error);
    setTyping(false);
  };

  const sendMessage = (text) => {
    const message = {
      direction: "outgoing",
      message: text,
      sentTime: new Date().toLocaleTimeString(),
    };

    const newMessages = [...messages, message];
    setMessages(newMessages);
    setTyping(true);

    fetch("/api/chat/messages", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    })
      .then(onReply)
      .catch(onError);
  };

  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px" }}>
      {isOpen ? (
        <MainContainer
          style={{
            height: "500px",
            width: "400px",
            backgroundColor: "transparent",
          }}
        >
          <ChatContainer>
            <ConversationHeader>
              <Avatar name="Emily" src={avatarUrl} status="available" />
              <ConversationHeader.Content info="Online" userName="Soujannya" />
              <ConversationHeader.Actions>
                <ArrowButton direction="down" onClick={handleToggle} />
              </ConversationHeader.Actions>
            </ConversationHeader>

            <MessageList
              typingIndicator={
                typing && <TypingIndicator content="Soujannya is typing" />
              }
            >
              {messages.map((msg, idx) => (
                <Message key={idx} model={msg} type="custom">
                  <Message.CustomContent>
                    <ReactMarkdown>{msg.message}</ReactMarkdown>
                  </Message.CustomContent>
                </Message>
              ))}
            </MessageList>
            <MessageInput
              attachButton={false}
              onSend={(_, text) => sendMessage(text)}
              placeholder="Type message here"
            />
          </ChatContainer>
        </MainContainer>
      ) : (
        <Avatar
          name="Zoe"
          size="lg"
          src={avatarUrl}
          status={openedOnce ? "available" : "eager"}
          onClick={handleToggle}
        />
      )}
    </div>
  );
};
