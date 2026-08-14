export interface Particle {
  x: number; y: number; z: number; radius: number; color: string; speed: number;
}

export interface NodeItem {
  x1: number; y1: number; z1: number;
  x2: number; y2: number; z2: number;
  color1: string; color2: string; depthIndex: number;
}

export const createHelixParticles = (width: number, height: number, count: number): Particle[] => {
  const colors = ['#00f2fe', '#4facfe', '#10b981', '#8b5cf6'];
  return Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * width * 0.8,
    y: (Math.random() - 0.5) * height * 0.8,
    z: Math.random() * 400 - 200,
    radius: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 0.01 + 0.005,
  }));
};

export const calculateStrandNode = (
  i: number,
  strandCount: number,
  helixLength: number,
  helixRadius: number,
  rotationAngle: number,
  cosX: number, sinX: number, cosY: number, sinY: number,
  centerX: number, centerY: number
): NodeItem => {
  const t = (i / strandCount) * Math.PI * 4 + rotationAngle;
  const yOffset = (i - strandCount / 2) * (helixLength / strandCount);
  const x1 = Math.cos(t) * helixRadius, z1 = Math.sin(t) * helixRadius;
  const x2 = Math.cos(t + Math.PI) * helixRadius, z2 = Math.sin(t + Math.PI) * helixRadius;

  const rx1 = x1 * cosY - z1 * sinY, rz1 = x1 * sinY + z1 * cosY;
  const ry1 = yOffset * cosX - rz1 * sinX, finalZ1 = yOffset * sinX + rz1 * cosX;

  const rx2 = x2 * cosY - z2 * sinY, rz2 = x2 * sinY + z2 * cosY;
  const ry2 = yOffset * cosX - rz2 * sinX, finalZ2 = yOffset * sinX + rz2 * cosX;

  return {
    x1: centerX + rx1, y1: centerY + ry1, z1: finalZ1,
    x2: centerX + rx2, y2: centerY + ry2, z2: finalZ2,
    color1: i % 2 === 0 ? '#00f2fe' : '#10b981',
    color2: i % 2 === 0 ? '#a855f7' : '#38bdf8',
    depthIndex: (finalZ1 + finalZ2) / 2,
  };
};
