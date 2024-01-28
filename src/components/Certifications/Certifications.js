import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { certificationsData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./CertificationsStyles";

const Certifications = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <Boxes>
        {certificationsData
          .filter((element, index) =>
            window.screen.width < 500 ? [0, 1, 2, 7].includes(index) : true
          )
          .map((card, index) => (
            <Box
              style={{
                height: "fit-content",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
              }}
              key={index}
              onClick={() => openInNewTab(card.url)}
            >
              <div>
                <BoxNum>{card.org} </BoxNum>
                <BoxText>{card.text}</BoxText>
              </div>
              {/* <span style={{fontFamily:"Nunito",fontSize:12}}>Credential ID: {card.credential}</span> */}
              <AiFillCaretRight size="4rem" />
            </Box>
          ))}
      </Boxes>
    </Section>
  );
};

export default Certifications;
