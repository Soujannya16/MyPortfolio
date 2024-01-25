import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GridContainer = styled.section`
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: fit-content;
  padding-bottom: 10px;
  margin-bottom: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 2.5rem 0;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const ExternalLinks = styled.a`
  margin-bottom: 0.5rem;
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  overflow: hidden;
  flex-wrap: wrap;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  padding: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;
