import React from 'react';
import Slide from '../components/Slide';
import reloj from '../assets/reloj.jpg';

export default function Slide6() {
  return (
    <Slide
      title="Pista 4 — Su reloj más famoso"
      subtitle="Un reloj que no solo marca horas: hay figuras que desfilan."
      image={reloj}
      imageAlt="Reloj astronómico medieval, detalle, ligeramente borroso"
      color="#fff8e1"
      notes="Dejar que la imagen y la frase hagan ‘clic’."
      animation={{ initial: { opacity: 0.7, filter: 'blur(4px)' }, animate: { opacity: 1, filter: 'blur(0px)' }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: close-up of ornate astronomical clock face, medieval detail, slightly blurred */}
    </Slide>
  );
}
