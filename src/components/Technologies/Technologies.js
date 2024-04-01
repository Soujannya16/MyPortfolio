import React from "react";
import { DiFirebase, DiReact, DiZend, DiDatabase } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { SectionDivArrow } from "../SectionDivArrow";

const Technologies = () => (
  <Section id="tech">
    <SectionDivArrow divider />
    <SectionTitle style={{ lineHeight: "58px" }}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web as well as application
      development world. From Back-end To Design
    </SectionText>
    <List
      style={
        window.innerWidth > 1024
          ? {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              maxWidth: "1000px",
              margin: "auto",
            }
          : {}
      }
    >
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, React Native (Android + iOS)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, Adobe Xd
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, Java Springboot
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, MongoDB, Firebase, postgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivArrow colorAlt />
  </Section>
);

export default Technologies;
