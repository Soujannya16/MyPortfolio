import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <a href="#experience" legacyBehavior>
          <NavLink>Professional Experience</NavLink>
        </a>
      </li>
      <li>
        <a href="#projects" legacyBehavior>
          <NavLink>Personal Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </a>
      </li>
      <li>
        <a href="#certifications" legacyBehavior>
          <NavLink>Certifications</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Soujannya16">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/soujannya-roy/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/S__TheAce?t=ooWYvBvUC_8bxr6RLv4MAA&s=09">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
