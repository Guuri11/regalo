import React from 'react';
import Slide from '../components/Slide';
import comoJugar from '../assets/como-jugar.jpg';

export default function Slide2() {
  return (
    <Slide
      title="Cómo jugar"
      subtitle="Hay 9 pistas. Pasa diapositivas y trata de adivinar. Cada pista se aclara un poco más."
      image={comoJugar}
      imageAlt="Icono de regalo y lupa"
      color="#fff8e1"
      notes="Explica la dinámica en 2 frases."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } }}
    >
      {/* ... */}
    </Slide>
  );
}
