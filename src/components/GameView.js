"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useGameState } from '@/hooks/useGameState';

export default function GameView() {
    const { level, characterPosition, loading } = useGameState();
    const mountRef = useRef(null);
    const cameraRef = useRef(null);
    const controlsRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Renderer setup
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(rendererRef.current.domElement);

        // Scene setup
        sceneRef.current = new THREE.Scene();
        sceneRef.current.background = new THREE.Color(0x202020);

        // Camera setup
        cameraRef.current = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        cameraRef.current.position.set(5, 10, 20);

        // Controls setup
        controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
        controlsRef.current.enableDamping = true;
        controlsRef.current.dampingFactor = 0.1;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        sceneRef.current.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        sceneRef.current.add(directionalLight);

        // Render Level
        level.layout.forEach((layer, y) => {
            layer.forEach((row, z) => {
                row.forEach((cell, x) => {
                    if (cell === 1) {
                        const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
                        const blockMaterial = new THREE.MeshStandardMaterial({ color: 'green' });
                        const block = new THREE.Mesh(blockGeometry, blockMaterial);
                        block.position.set(x, y, z);
                        sceneRef.current.add(block);
                    }
                });
            });
        });

        // Character Setup
        const characterGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const characterMaterial = new THREE.MeshStandardMaterial({ color: 'blue' });
        const character = new THREE.Mesh(characterGeometry, characterMaterial);
        character.position.set(characterPosition.x, characterPosition.y, characterPosition.z);
        sceneRef.current.add(character);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controlsRef.current.update();
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        };
        animate();

        return () => {
            controlsRef.current.dispose();
            rendererRef.current.dispose();
            mount.removeChild(rendererRef.current.domElement);
        };
    }, [level, characterPosition, loading]);

    return (
        <div ref={mountRef} className="w-full h-full bg-black"></div>
    );
}