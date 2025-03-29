import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import KnowMe from "./KnowMe";
import ChatbotComponent from "../AskMe/ChatbotComponent";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // useEffect(() => {
  //   fetch("/api/hello").then(async (res) => {
  //     console.log("res", res);
  //     if (res.status == 200) {
  //       const data = await res.json();
  //       console.log("data", data["message"]);
  //     }
  //   });
  // }, []);

  const pdfUrl =
    "https://drive.google.com/file/d/11rlvI8H3J1BfyQIfFH2iaAdKnXw9z6sc/view?usp=sharing";
  const openInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hello, <br />I am Soujannya Roy
          </SectionTitle>
          <SectionText>Welcome to my personal Portfolio</SectionText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button onClick={() => openInNewTab()}>Download Resume</Button>
            {window.innerWidth > 1024 && (
              <Button onClick={openModal}>Learn More</Button>
            )}
            <KnowMe isOpen={isModalOpen} onClose={closeModal} />
            <Button onClick={() => setChatbotOpen(true)}>Ask about me</Button>
            <ChatbotComponent
              isOpen={chatbotOpen}
              onClose={() => setChatbotOpen(false)}
            />
          </div>
        </LeftSection>
      </Section>
    </>
  );
};
export default Hero;
