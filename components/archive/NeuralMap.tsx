"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Node {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
}

interface Edge {
  source: string;
  target: string;
}

export default function NeuralMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    { id: "fold", name: "The Fold", category: "universe", x: 400, y: 300 },
    { id: "zenith", name: "Zenith Era", category: "eras", x: 250, y: 150 },
    { id: "fracture", name: "Fracture Era", category: "eras", x: 550, y: 150 },
    { id: "drift", name: "Drift Era", category: "eras", x: 400, y: 50 },
    { id: "the_aligned", name: "The Aligned", category: "factions", x: 100, y: 150 },
    { id: "shard_crawlers", name: "Shard Crawlers", category: "factions", x: 700, y: 150 },
    { id: "void_siphons", name: "Void Siphons", category: "factions", x: 400, y: -50 },
    { id: "great-fracture", name: "Great Fracture", category: "events", x: 400, y: 450 },
    { id: "zenith-gate", name: "Zenith Gate", category: "tech", x: 250, y: 450 },
    { id: "neural-link", name: "Neural Link", category: "tech", x: 550, y: 450 },
  ];

  const edges: Edge[] = [
    { source: "fold", target: "zenith" },
    { source: "fold", target: "fracture" },
    { source: "fold", target: "drift" },
    { source: "fold", target: "great-fracture" },
    { source: "zenith", target: "the_aligned" },
    { source: "fracture", target: "shard_crawlers" },
    { source: "drift", target: "void_siphons" },
    { source: "great-fracture", target: "zenith-gate" },
    { source: "great-fracture", target: "fold" },
    { source: "neural-link", target: "fold" },
    { source: "neural-link", target: "great-fracture" },
  ];

  return (
    <div className="w-full aspect-video bg-[#0d1117]/50 rounded-3xl border border-[#00f5d4]/10 relative overflow-hidden group">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      
      <svg viewBox="0 0 800 600" className="w-full h-full">
        {/* Draw Edges */}
        {edges.map((edge, i) => {
          const source = nodes.find(n => n.id === edge.source);
          const target = nodes.find(n => n.id === edge.target);
          if (!source || !target) return null;

          const isActive = hoveredNode === edge.source || hoveredNode === edge.target;

          return (
            <motion.line
              key={i}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={isActive ? "#00f5d4" : "#00f5d4"}
              strokeWidth={isActive ? 2 : 1}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: isActive ? 0.6 : 0.1, strokeWidth: isActive ? 2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Draw Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <Link href={node.category === "universe" ? "/archive" : `/archive/${node.category}/${node.id}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={hoveredNode === node.id ? 8 : 4}
                fill="#00f5d4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.5, fill: "#fff" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer cyber-glow-filter"
              />
              <motion.text
                x={node.x}
                y={node.y + 20}
                textAnchor="middle"
                fill={hoveredNode === node.id ? "#fff" : "#00f5d4"}
                fontSize="10"
                className="font-mono uppercase tracking-widest pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredNode === node.id ? 1 : 0.4 }}
              >
                {node.name}
              </motion.text>
            </Link>
          </g>
        ))}
      </svg>

      {/* Title Overlay */}
      <div className="absolute bottom-10 left-10 text-[#00f5d4]">
        <h3 className="text-xl font-bold tracking-widest uppercase">Neural_Link_Map</h3>
        <p className="text-[10px] opacity-60 font-mono tracking-widest uppercase">Interactive Shard Navigation // Connected Lore Nodes</p>
      </div>
    </div>
  );
}
