import config from "../../Chatbot/config.js";
import MessageParser from "../../Chatbot/MessageParser.jsx";
import ActionProvider from "../../Chatbot/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import styles from "./ChatBot.module.css";

const ChatbotComponent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>{" "}
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};
export default ChatbotComponent;
