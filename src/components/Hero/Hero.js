import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
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
        
        <Button onClick={()=>window.location='https://google.com'}>
          
        </Button>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
)
export default Hero;