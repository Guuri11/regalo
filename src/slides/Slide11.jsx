
import React from 'react';
import Slide from '../components/Slide';
import pragaRevelacion from '../assets/praga-revelacion.webp';
import Confetti from '../components/Confetti';

export default function Slide11() {
  return (
    <>
      <Confetti />
      <Slide
        title="¡Nos vamos a PRAGA!"
        subtitle="3 de diciembre — 9 de diciembre"
        image={pragaRevelacion}
        imageAlt="Tarjetas de embarque, hotel, Praga"
        color="#f7d774"
        notes="Efecto sorpresa con sonido suave (campana) al aparecer."
        animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ background: '#fff8e1', color: '#0a1931', borderRadius: 16, padding: '1.2em 2em', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 22, boxShadow: '0 2px 12px rgba(10,25,49,0.12)' }}>
            <span>🏨 Hotel: <b><a href="https://www.booking.com/hotel/cz/adlon.es.html" target="_blank" rel="noopener noreferrer">Hotel Assenzio Prague</a></b></span>
          </div>
        </div>
      </Slide>
    </>
  );
}
