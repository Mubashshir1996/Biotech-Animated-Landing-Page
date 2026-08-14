import React, { useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDnaHelixRenderer } from '../../hooks/useDnaHelixRenderer';

interface DnaHelixCanvasProps {
  mouseX: number;
  mouseY: number;
}

export const DnaHelixCanvas: React.FC<DnaHelixCanvasProps> = React.memo(({ mouseX, mouseY }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useDnaHelixRenderer(canvasRef, mouseX, mouseY, isReducedMotion);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[550px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        aria-label="3D Interactive DNA Double Helix visualization"
        role="img"
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      <span className="sr-only">
        An interactive bioluminescent 3D DNA double helix rotating with base pair nodes reacting to mouse movements.
      </span>
      <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg border border-bio-glow/30 flex items-center gap-2 text-xs font-mono text-bio-glow pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-bio-glow animate-ping" />
        <span>3D Genome Mesh active • 120 FPS</span>
      </div>
    </div>
  );
});

DnaHelixCanvas.displayName = 'DnaHelixCanvas';
