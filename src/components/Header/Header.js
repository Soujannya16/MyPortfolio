import Link from "next/link";
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
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#experience">
          <NavLink>Professional Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Personal Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#certifications">
          <NavLink>Certifications</NavLink>
        </Link>
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
