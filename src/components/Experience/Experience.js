import React, { useEffect, useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  RoleDurationDiv,
} from "./ExperienceStyles";
import { SectionDivArrow } from "../SectionDivArrow";

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <GridContainer>
        {experience.map((p, i) => {
          return (
            <BlogCard key={i}>
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "0.6rem",
                }}
              >
                <Img src={p.image} />
              </div>
              <HeaderThree>{p.title}</HeaderThree>
              <RoleDurationDiv
                style={{ fontSize: window.screen.width < 500 && "1.3rem" }}
              >
                {p.role}
                <> , </>
                {p.duration}
              </RoleDurationDiv>
              <Hr />
              <CardInfo>
                <ul>
                  {p.description.map((e, i) => {
                    return (
                      <li key={i}>
                        <h1> {e.project}</h1>
                        <ul style={{ marginLeft: "2rem", marginRight: "1rem" }}>
                          {" "}
                          {e.work.map((e, i) => {
                            return (
                              <li
                                key={i}
                                style={{
                                  listStyle: "circle",
                                }}
                              >
                                {e}
                              </li>
                            );
                          })}
                        </ul>
                        <UtilityList>
                          {e.links &&
                            e.links.map((e, i) => (
                              <ExternalLinks
                                key={i}
                                href={e.href}
                                target="_blank"
                              >
                                {e.title}
                              </ExternalLinks>
                            ))}
                        </UtilityList>
                      </li>
                    );
                  })}
                </ul>
              </CardInfo>
              <div>
                <TitleContent style={{ paddingTop: 20, fontSize: 23 }}>
                  Tech Stack
                </TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </GridContainer>
      <SectionDivArrow />
    </Section>
  );
};
