import React from "react";
import styles from "./KnowMe.module.css";
import { Img } from "../Projects/ProjectsStyles";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { myDesc } from "../../constants/constants";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <Section
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: 30,
              marginTop: 30,
            }}
          >
            <Img
              src="images/Me.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <SectionText>{myDesc}</SectionText>
        </Section>
      </div>
    </div>
  );
};

export default Modal;
