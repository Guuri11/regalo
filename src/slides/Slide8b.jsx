import React from 'react';
import Slide from '../components/Slide';

export default function Slide8b() {
  return (
    <Slide
      title="Pista 8 — Spiderman: Far From Home"
      subtitle="Sí, se rodó una escena de Spiderman aquí 😁"
      image={null}
      imageAlt="Escena de Spiderman en Praga"
      notes="Embed de YouTube con la escena de Spiderman en Praga."
      animation={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.2 } }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <div style={{ maxWidth: 560, width: '100%' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 16, boxShadow: '0 2px 16px rgba(10,25,49,0.18)' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HfEjIU7Qbj8?si=kJ05AoyjKsP4AF_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </Slide>
  );
}
