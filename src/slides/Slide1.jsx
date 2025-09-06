import React from 'react';
import Slide from '../components/Slide';
import europaNoche from '../assets/europa-de-noche.jpg';

export default function Slide1() {
  return (
    <Slide
      title="Un juego para una pequeña aventura..."
      subtitle=""
      image={europaNoche}
      imageAlt="Europa de noche, luces, mapa difuso"
      color="#fff8e1"
      notes="Dile que pase slide cuando esté lista, que esto es un juego."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      {/* Puedes agregar contenido extra aquí si lo deseas */}
    </Slide>
  );
}
