import React, { useEffect, useState } from 'react';
import {AiFillUpCircle} from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle,SectionText } from '../styles/GlobalComponents';


export const SectionDivArrow =(props)=>{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      window.location.replace(window.location.href.split('#')[0]);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
    return(
        <div style={{display:"flex", justifyContent:'space-between'}}>
        <SectionDivider colorAlt={props?.colorAlt} divider={props?.divider}/>
        <AiFillUpCircle size="3rem" onClick={scrollToTop} style={{cursor:'pointer',marginTop:'30px'}} />
        </div>
    )
}