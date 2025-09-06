import React, { useEffect } from 'react';

export default function Confetti() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
    const confettiCount = 120;
    const confetti = Array.from({ length: confettiCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: 6 + Math.random() * 8,
      d: 8 + Math.random() * 8,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05,
      speed: 2 + Math.random() * 2
    }));
    let animationFrame;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(c => {
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();
      });
    }
    function update() {
      confetti.forEach(c => {
        c.y += c.speed;
        c.tiltAngle += c.tiltAngleIncremental;
        c.tilt = Math.sin(c.tiltAngle) * 15;
        c.x += Math.sin(c.tiltAngle) * 2;
        if (c.y > canvas.height + 20) {
          c.x = Math.random() * canvas.width;
          c.y = -10;
        }
      });
    }
    function loop() {
      draw();
      update();
      animationFrame = requestAnimationFrame(loop);
    }
    loop();
    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.removeChild(canvas);
    };
  }, []);
  return null;
}
