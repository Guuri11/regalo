import React from 'react';
import Slide from '../components/Slide';
import pragaNavidad from '../assets/praga-mercado-navideño.jpg';

export default function Slide4() {
  return (
    <Slide
      title="Pista 2 — Clima/época"
      subtitle="Luces, casetas de madera, vino caliente y dulces."
      image={pragaNavidad}
      imageAlt="Mercado navideño europeo, luces, nieve, romántico"
      color="#fff8e1"
      notes="Crear atmósfera navideña."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } }}
    >
      {/* Prompt IA: cozy European Christmas market with wooden stalls, lights, snow lightly falling, romantic */}
    </Slide>
  );
}
