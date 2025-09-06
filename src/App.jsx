

import React, { useState } from 'react';
import Background from './components/Background';

import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide8b from './slides/Slide8b';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';

const slides = [
  <Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />, <Slide4 key={4} />, <Slide5 key={5} />, <Slide6 key={6} />, <Slide7 key={7} />, <Slide8 key={8} />, <Slide9 key={9} />, <Slide8b key={8.5} />, <Slide10 key={10} />, <Slide11 key={11} />
];

function App() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((c) => (c < slides.length - 1 ? c + 1 : c));
  const goPrev = () => setCurrent((c) => (c > 0 ? c - 1 : c));

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 2, width: '100vw', height: '100vh' }}>
        {slides[current]}
        <div style={{ position: 'absolute', bottom: 30, left: 30, display: 'flex', gap: 16 }}>
          <button onClick={goPrev} disabled={current === 0} style={{ fontSize: 18, padding: '0.7em 1.5em', borderRadius: 20, border: 'none', background: 'rgba(20,18,40,0.92)', color: '#f7d774', opacity: current === 0 ? 0.5 : 1, cursor: current === 0 ? 'not-allowed' : 'pointer', fontFamily: 'Playfair Display, serif', letterSpacing: 1 }}>{'← Anterior'}</button>
          <button onClick={goNext} disabled={current === slides.length - 1} style={{ fontSize: 18, padding: '0.7em 1.5em', borderRadius: 20, border: 'none', background: 'rgba(220,200,120,0.92)', color: '#2a1a3a', opacity: current === slides.length - 1 ? 0.5 : 1, cursor: current === slides.length - 1 ? 'not-allowed' : 'pointer', fontFamily: 'Playfair Display, serif', letterSpacing: 1 }}>{'Siguiente →'}</button>
        </div>
        <div style={{ position: 'absolute', bottom: 30, right: 30, color: '#fff8e1', fontFamily: 'Montserrat, sans-serif', fontSize: 18, textShadow: '0 2px 8px #1a1333' }}>
          {current + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}

export default App;
