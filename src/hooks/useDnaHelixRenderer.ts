import { useEffect, RefObject } from 'react';
import { Particle, NodeItem, createHelixParticles, calculateStrandNode } from './dnaMath';

export const useDnaHelixRenderer = (
  canvasRef: RefObject<HTMLCanvasElement>,
  mouseX: number,
  mouseY: number,
  isReducedMotion: boolean
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = createHelixParticles(width, height, isReducedMotion ? 30 : 100);
    const strandCount = 28;
    const helixRadius = Math.min(width, height) * 0.18;
    const helixLength = Math.min(width, height) * 0.7;
    let rotationAngle = 0;
    let targetRotX = 0, targetRotY = 0, currentRotX = 0, currentRotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2, centerY = height / 2;

      if (!isReducedMotion) {
        targetRotX = (mouseY / height - 0.5) * 0.4;
        targetRotY = (mouseX / width - 0.5) * 0.4;
        rotationAngle += 0.012;
      }
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, helixLength * 0.8);
      grad.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!isReducedMotion) {
          p.y -= p.speed * 20;
          if (p.y < -height / 2) p.y = height / 2;
        }
        const scale = 300 / (300 + p.z);
        ctx.beginPath();
        ctx.arc(centerX + p.x * scale + currentRotY * 40, centerY + p.y * scale + currentRotX * 40, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, scale * 0.6);
        ctx.fill();
      });

      const nodes: NodeItem[] = [];
      const cosX = Math.cos(currentRotX), sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY), sinY = Math.sin(currentRotY);

      for (let i = 0; i < strandCount; i++) {
        nodes.push(calculateStrandNode(i, strandCount, helixLength, helixRadius, rotationAngle, cosX, sinX, cosY, sinY, centerX, centerY));
      }

      nodes.sort((a, b) => a.depthIndex - b.depthIndex);
      nodes.forEach((n) => {
        const s1 = 400 / (400 - n.z1), s2 = 400 / (400 - n.z2);
        const alpha = Math.max(0.2, (n.depthIndex + 200) / 400);

        ctx.beginPath();
        ctx.moveTo(n.x1, n.y1); ctx.lineTo(n.x2, n.y2);
        ctx.strokeStyle = n.color1; ctx.globalAlpha = alpha * 0.7;
        ctx.lineWidth = 2 * Math.min(s1, s2); ctx.stroke();

        ctx.beginPath(); ctx.arc(n.x1, n.y1, 6 * s1, 0, Math.PI * 2);
        ctx.fillStyle = n.color1; ctx.globalAlpha = alpha; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x2, n.y2, 6 * s2, 0, Math.PI * 2);
        ctx.fillStyle = n.color2; ctx.globalAlpha = alpha; ctx.fill();
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef, mouseX, mouseY, isReducedMotion]);
};
