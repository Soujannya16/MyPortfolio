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
} from "./ExperienceStyles";
import { SectionDivArrow } from "../SectionDivArrow";
import { FaCircle } from "react-icons/fa";

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
                  width: 70,
                  height: 70,
                  borderRadius: "10%",
                  overflow: "hidden",
                  marginBottom: "70px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Img src={p.image} />
              </div>
              <HeaderThree title>{p.title}</HeaderThree>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {p.role}
                <FaCircle size="0.1px" />
                {p.duration}
              </div>
              <Hr />
              <CardInfo className="card-info">
                <ul>
                  {p.description.map((e, i) => {
                    return (
                      <div key={i}>
                        <h1> {e.project}</h1>
                        <ul style={{ marginLeft: "2rem" }}>
                          {" "}
                          {e.work.map((e, i) => {
                            return (
                              <li key={i} style={{ listStyle: "circle" }}>
                                {e}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
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
              {p.title === "PwC India" && (
                <UtilityList>
                  <ExternalLinks href={p.visit}>Visit Argus Site</ExternalLinks>
                  <ExternalLinks
                    href={" https://eurokids.lighthouse-learning.com/"}
                  >
                    Visit Homebuddy Site
                  </ExternalLinks>
                  <ExternalLinks
                    href={
                      "https://play.google.com/store/apps/details?id=com.lighthouse.argus&pcampaignid=web_share"
                    }
                  >
                    Visit Argus App
                  </ExternalLinks>
                  <ExternalLinks
                    href={
                      "https://play.google.com/store/apps/details?id=com.homebuddyLearning&pcampaignid=web_share"
                    }
                  >
                    Visit Homebuddy App
                  </ExternalLinks>
                  {/* <ExternalLinks href={p.source}>Source</ExternalLinks> */}
                </UtilityList>
              )}
            </BlogCard>
          );
        })}
      </GridContainer>
      <SectionDivArrow />
    </Section>
  );
};
