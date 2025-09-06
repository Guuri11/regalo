import React from 'react';
import styled from 'styled-components';
import bg from '../assets/background.jpg';

const BgWrap = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const BgImg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: grayscale(0.2) blur(1.5px) brightness(0.55) contrast(1.1);
  opacity: 0.85;
  position: absolute;
  top: 0; left: 0;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, rgba(30,20,60,0.82) 0%, rgba(40,30,80,0.7) 100%);
  z-index: 1;
`;

export default function Background() {
  return (
    <BgWrap>
      <BgImg src={bg} alt="Praga fondo" />
      <Overlay />
    </BgWrap>
  );
}
