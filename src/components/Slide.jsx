
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Background from './Background';

const SlideContainer = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ color }) => color || '#fff'};
  position: relative;
  font-family: 'Montserrat', sans-serif;
  overflow-y: auto;
  padding: 2.5vw 2vw 6vw 2vw;

  @media (max-width: 600px) {
    padding: 4vw 2vw 12vw 2vw;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  color: ${({ color }) => color || '#ffe6a0'};
  margin-bottom: 1.1rem;
  text-align: center;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 12px #2a1a3a, 0 0 0.5em #d1b97a;
  border-bottom: 2.5px solid #d1b97a;
  display: inline-block;
  padding: 0 0.5em 0.15em 0.5em;
  background: rgba(30,20,60,0.18);
  border-radius: 0.4em 0.4em 0 0;

  @media (max-width: 900px) {
    font-size: 2.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0 0.2em 0.1em 0.2em;
  }
`;

const Subtitle = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: #f7d774;
  margin-bottom: 2.1rem;
  text-align: center;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 8px #1a1333;
  background: rgba(40,30,80,0.13);
  border-radius: 0.3em;
  padding: 0.3em 0.7em;

  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.2em 0.3em;
  }
`;

const Image = styled.img`
  max-width: 60vw;
  max-height: 50vh;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10,25,49,0.2);
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    max-width: 85vw;
    max-height: 32vh;
  }
  @media (max-width: 600px) {
    max-width: 95vw;
    max-height: 28vh;
    border-radius: 0.7rem;
  }
`;

const NotesButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(90deg, #ffe6a0 60%, #d1b97a 100%);
  color: #2a1a3a;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(10,25,49,0.13);
  border: 1.5px solid #d1b97a;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: linear-gradient(90deg, #f7d774 60%, #ffe6a0 100%);
    color: #1a1333;
  }
  @media (max-width: 600px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Notes = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 2rem;
  background: rgba(10,25,49,0.95);
  color: #fff8e1;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
  max-width: 350px;
  box-shadow: 0 2px 16px rgba(10,25,49,0.2);
  z-index: 10;

  @media (max-width: 600px) {
    bottom: 4.5rem;
    right: 1rem;
    font-size: 0.95rem;
    max-width: 90vw;
    padding: 0.8rem 1rem;
  }
`;

const Slide = ({
  title,
  subtitle,
  image,
  imageAlt,
  bg,
  color,
  children,
  notes,
  animation,
}) => {
  return (
    <>
      <Background />
      <SlideContainer
        initial={animation?.initial || { opacity: 0 }}
        animate={animation?.animate || { opacity: 1 }}
        exit={animation?.exit || { opacity: 0 }}
        transition={animation?.transition || { duration: 1 }}
        style={{
          background: bg || undefined,
          color: color || undefined,
        }}
      >
        {title && <Title color={color}>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {image && <Image src={image} alt={imageAlt || ''} />}
        {children}
      </SlideContainer>
    </>
  );
};

export default Slide;
