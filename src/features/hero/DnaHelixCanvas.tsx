import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DnaHelixCanvasProps {
  mouseX: number;
  mouseY: number;
}

export const DnaHelixCanvas: React.FC<DnaHelixCanvasProps> = ({ mouseX, mouseY }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Cloud Parameters
    const particleCount = isReducedMotion ? 40 : 120;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      speed: number;
    }> = [];

    const colors = ['#00f2fe', '#4facfe', '#10b981', '#8b5cf6', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 0.8,
        y: (Math.random() - 0.5) * height * 0.8,
        z: Math.random() * 400 - 200,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.01 + 0.005,
      });
    }

    // DNA Helix Parameters
    const strandCount = 28; // Number of base pairs along helix
    const helixRadius = Math.min(width, height) * 0.18;
    const helixLength = Math.min(width, height) * 0.7;
    let rotationAngle = 0;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse Parallax Inertia
      if (!isReducedMotion) {
        targetRotX = (mouseY / height - 0.5) * 0.4;
        targetRotY = (mouseX / width - 0.5) * 0.4;
      }
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      if (!isReducedMotion) {
        rotationAngle += 0.012;
      }

      // Draw Background Glow Orbs
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, helixLength * 0.8);
      gradient.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)');
      gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Bio Particles
      particles.forEach((p) => {
        if (!isReducedMotion) {
          p.y -= p.speed * 20;
          if (p.y < -height / 2) p.y = height / 2;
        }

        const scale = 300 / (300 + p.z);
        const px = centerX + p.x * scale + currentRotY * 50;
        const py = centerY + p.y * scale + currentRotX * 50;

        ctx.beginPath();
        ctx.arc(px, py, p.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, scale * 0.6));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render 3D DNA Helix Base Pairs
      const nodes: Array<{
        x1: number; y1: number; z1: number;
        x2: number; y2: number; z2: number;
        color1: string; color2: string;
        depthIndex: number;
      }> = [];

      for (let i = 0; i < strandCount; i++) {
        const t = (i / strandCount) * Math.PI * 4 + rotationAngle;
        const yOffset = (i - strandCount / 2) * (helixLength / strandCount);

        // Strand 1 Position
        const x1 = Math.cos(t) * helixRadius;
        const z1 = Math.sin(t) * helixRadius;

        // Strand 2 Position (180 deg phase shift)
        const x2 = Math.cos(t + Math.PI) * helixRadius;
        const z2 = Math.sin(t + Math.PI) * helixRadius;

        // Apply 3D Rotations (X & Y axes)
        const cosX = Math.cos(currentRotX);
        const sinX = Math.sin(currentRotX);
        const cosY = Math.cos(currentRotY);
        const sinY = Math.sin(currentRotY);

        // Rotate Strand 1
        const rx1 = x1 * cosY - z1 * sinY;
        const rz1 = x1 * sinY + z1 * cosY;
        const ry1 = yOffset * cosX - rz1 * sinX;
        const finalZ1 = yOffset * sinX + rz1 * cosX;

        // Rotate Strand 2
        const rx2 = x2 * cosY - z2 * sinY;
        const rz2 = x2 * sinY + z2 * cosY;
        const ry2 = yOffset * cosX - rz2 * sinX;
        const finalZ2 = yOffset * sinX + rz2 * cosX;

        const color1 = i % 2 === 0 ? '#00f2fe' : '#10b981';
        const color2 = i % 2 === 0 ? '#a855f7' : '#38bdf8';

        nodes.push({
          x1: centerX + rx1,
          y1: centerY + ry1,
          z1: finalZ1,
          x2: centerX + rx2,
          y2: centerY + ry2,
          z2: finalZ2,
          color1,
          color2,
          depthIndex: (finalZ1 + finalZ2) / 2,
        });
      }

      // Sort by Z-depth for correct 3D overlap rendering
      nodes.sort((a, b) => a.depthIndex - b.depthIndex);

      // Render base pair bonds & nucleotide spheres
      nodes.forEach((node) => {
        const scale1 = 400 / (400 - node.z1);
        const scale2 = 400 / (400 - node.z2);
        const alpha = Math.max(0.2, Math.min(1, (node.depthIndex + 200) / 400));

        // Base pair hydrogen bond line
        const bondGrad = ctx.createLinearGradient(node.x1, node.y1, node.x2, node.y2);
        bondGrad.addColorStop(0, node.color1);
        bondGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
        bondGrad.addColorStop(1, node.color2);

        ctx.beginPath();
        ctx.moveTo(node.x1, node.y1);
        ctx.lineTo(node.x2, node.y2);
        ctx.strokeStyle = bondGrad;
        ctx.globalAlpha = alpha * 0.7;
        ctx.lineWidth = 2 * Math.min(scale1, scale2);
        ctx.stroke();

        // Strand 1 Nucleotide Sphere
        ctx.beginPath();
        ctx.arc(node.x1, node.y1, 6 * scale1, 0, Math.PI * 2);
        ctx.fillStyle = node.color1;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = node.color1;
        ctx.shadowBlur = 12;
        ctx.fill();

        // Strand 2 Nucleotide Sphere
        ctx.beginPath();
        ctx.arc(node.x2, node.y2, 6 * scale2, 0, Math.PI * 2);
        ctx.fillStyle = node.color2;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = node.color2;
        ctx.shadowBlur = 12;
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY, isReducedMotion]);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[550px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        aria-label="3D Interactive DNA Double Helix visualization"
        role="img"
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      
      {/* Screen Reader Fallback Description */}
      <span className="sr-only">
        An interactive bioluminescent 3D DNA double helix rotating with cyan and emerald base pair nodes reacting to mouse movements.
      </span>

      {/* Decorative Interactive Tag overlay */}
      <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg border border-bio-glow/30 flex items-center gap-2 text-xs font-mono text-bio-glow pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-bio-glow animate-ping" />
        <span>3D Genome Mesh active • 120 FPS</span>
      </div>
    </div>
  );
};
