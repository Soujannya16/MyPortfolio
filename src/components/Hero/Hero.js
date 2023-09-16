import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1rkxA9b1ueNpwGrbPu9WcHYJ4VpcFhO5g/view?usp=sharing';
    const openInNewTab = () => {
      window.open(pdfUrl, '_blank');
    };
    return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          I am Soujannya Roy
        </SectionTitle>
        <SectionText>
        Welcome to my personal Portfolio
        </SectionText>
        
        <Button onClick={()=>openInNewTab()}>
          Download Resume
        </Button>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);
    };
export default Hero;