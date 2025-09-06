import React from 'react';
import Slide from '../components/Slide';

import bandera from '../assets/bandera.webp';

export default function Slide10() {
  return (
    <Slide
      title="Pista final: Un país de historia y magia"
      subtitle="¿Reconoces esta bandera? Pronto la verás ondear sobre castillos y plazas."
      image={bandera}
      imageAlt="Bandera de Chequia"
      color="#fff8e1"
      notes="Última pista antes de revelar."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      {/* Prompt IA: bandera de Chequia, collage pequeño de puente, reloj y mercado navideño */}
    </Slide>
  );
}
