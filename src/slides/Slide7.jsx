import React from 'react';
import Slide from '../components/Slide';
import castillo from '../assets/castillo.webp';

export default function Slide7() {
  return (
    <Slide
      title="Pista 5 — Castillo"
      subtitle="Un castillo en lo alto de una colina vigila la ciudad."
      image={castillo}
      imageAlt="Castillo grande en colina, amanecer, cuento de hadas"
      color="#fff8e1"
      notes="Sugerencia de foto desde lejos, silueta."
      animation={{ initial: { opacity: 0.7 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: large castle on a hill overlooking a river and city, dawn light, fairy-tale vibe */}
    </Slide>
  );
}
