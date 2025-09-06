import React from 'react';
import Slide from '../components/Slide';
import europa from '../assets/Europe_Location_CZ.svg';

export default function Slide9() {
  return (
    <Slide
      title="Pista 7 — Zoom en mapa"
      subtitle=""
      image={europa}
      imageAlt="Animación de zoom de Europa a Praga"
      color="#fff8e1"
      notes="Animación: Morph/Zoom."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: map zoom animation from Europe -> Czech Republic -> Prague, smooth transition */}
    </Slide>
  );
}
