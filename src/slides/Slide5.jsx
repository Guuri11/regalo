import React from 'react';
import Slide from '../components/Slide';
import puenteCarlos from '../assets/puente-carlos.webp';

export default function Slide5() {
  return (
    <Slide
      title="Pista 3 — Arquitectura"
  subtitle="Cruzamos un río donde las estatuas vigilan a los caminantes. Arquitectura que mezcla el gótico y el barroco en cada rincón."
      image={puenteCarlos}
      imageAlt="Puente de piedra histórico con estatuas, atardecer, niebla"
      color="#fff8e1"
      notes="Evitar decir el nombre; dejar que lo reconozca por la imagen."
      animation={{ initial: { opacity: 0.5, filter: 'blur(8px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: historic stone bridge with statues at dusk, mist above river, cinematic, no name */}
    </Slide>
  );
}
