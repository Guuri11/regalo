import React from 'react';
import Slide from '../components/Slide';
import pagaCalles from '../assets/paga-calles.jpg';

export default function Slide8() {
  return (
    <Slide
  title="Pista 6 — Magia en las calles"
      subtitle="Cada fachada tiene su estilo y cada calle parece sacada de otra época."
      image={pagaCalles}
      imageAlt="Calle empedrada, luces cálidas, café pequeño, aire vintage"
      color="#fff8e1"
      notes="Esto conecta su gusto por la magia / Harry Potter sin decirlo."
      animation={{ initial: { opacity: 0.7 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: narrow cobbled street, warm lights, small whimsical café exterior, vintage feel */}
    </Slide>
  );
}
