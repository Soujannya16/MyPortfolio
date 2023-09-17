import React, { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import KnowMe from "./KnowMe";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pdfUrl =
    "https://drive.google.com/file/d/1rkxA9b1ueNpwGrbPu9WcHYJ4VpcFhO5g/view?usp=sharing";
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
            <Button onClick={openModal}>Learn More</Button>
            <KnowMe isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </LeftSection>
      </Section>
    </>
  );
};
export default Hero;
