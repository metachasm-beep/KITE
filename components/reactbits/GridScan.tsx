"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GridScanProps {
  lineThickness?: number;
  linesColor?: string;
  scanColor?: string;
  scanOpacity?: number;
  gridScale?: number;
  lineStyle?: 'solid' | 'dashed' | 'dotted';
  lineJitter?: number;
  scanDuration?: number;
  scanDelay?: number;
  className?: string;
}

const vert = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const frag = `
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform float uLineThickness;
uniform vec3 uLinesColor;
uniform vec3 uScanColor;
uniform float uGridScale;
uniform float uScanOpacity;
uniform float uScanDuration;
uniform float uScanDelay;
varying vec2 vUv;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
    vec2 uv = fragCoord / iResolution.xy;

    float grid = 0.0;
    float scale = uGridScale * 10.0;
    
    // Grid lines
    vec2 g = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
    float line = min(g.x, g.y);
    grid = 1.0 - smoothstep(0.0, uLineThickness, line);

    // Scanline
    float cycle = uScanDuration + uScanDelay;
    float phase = mod(iTime, cycle) / uScanDuration;
    phase = clamp(phase, 0.0, 1.0);
    
    float scanPos = 1.0 - phase;
    float scanLine = exp(-pow(uv.y - scanPos, 2.0) * 200.0);
    
    vec3 col = uLinesColor * grid * 0.3;
    col += uScanColor * scanLine * uScanOpacity;
    
    fragColor = vec4(col, col.r + col.g + col.b);
}

void main(){
  vec4 c;
  mainImage(c, vUv * iResolution.xy);
  gl_FragColor = c;
}
`;

export const GridScan: React.FC<GridScanProps> = ({
  lineThickness = 1,
  linesColor = '#00f5d4',
  scanColor = '#00f5d4',
  scanOpacity = 0.4,
  gridScale = 1.0,
  scanDuration = 2.0,
  scanDelay = 1.0,
  className
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const uniforms = {
      iResolution: { value: new THREE.Vector3(containerRef.current.clientWidth, containerRef.current.clientHeight, 1) },
      iTime: { value: 0 },
      uLineThickness: { value: lineThickness },
      uLinesColor: { value: new THREE.Color(linesColor) },
      uScanColor: { value: new THREE.Color(scanColor) },
      uGridScale: { value: gridScale },
      uScanOpacity: { value: scanOpacity },
      uScanDuration: { value: scanDuration },
      uScanDelay: { value: scanDelay }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      transparent: true
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let frameId: number;
    const animate = (time: number) => {
      uniforms.iTime.value = time / 1000;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!containerRef.current) return;
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      uniforms.iResolution.value.set(containerRef.current.clientWidth, containerRef.current.clientHeight, 1);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full absolute inset-0 -z-10 ${className}`} />;
};

export default GridScan;
