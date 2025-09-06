import React from 'react';
import Slide from '../components/Slide';
import europa from '../assets/europa.jpg';

export default function Slide3() {
  return (
    <Slide
      title="Pista 1 — Continente"
      subtitle="Estamos dentro de Europa."
      image={europa}
      imageAlt="Mapa de Europa con brillo en Europa Central"
      color="#fff8e1"
      notes="Mantenerlo obvio pero no la ciudad."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } }}
    >
      {/* Prompt IA: map of Europe with a soft glow highlighting Central Europe; minimalist style */}
    </Slide>
  );
}
