import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from "lucide-react";
import * as THREE from 'three';

export const HeroSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef(null);
  const meshesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.25),
      new THREE.DodecahedronGeometry(0.35),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6, 
        emissive: 0x1e40af, 
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x8b5cf6, 
        emissive: 0x7c3aed, 
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x06b6d4, 
        emissive: 0x0891b2, 
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      }),
      new THREE.MeshStandardMaterial({ 
        color: 0x10b981, 
        emissive: 0x059669, 
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      }),
    ];

    // Create floating meshes
    const meshes = [];
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      );
      
      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Store initial position for animation
      mesh.userData = {
        initialPosition: mesh.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatRange: Math.random() * 2 + 1
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Camera positioning
    camera.position.z = 10;

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation loop
    const animate = (time) => {
      // Rotate and float meshes
      meshes.forEach((mesh, index) => {
        // Continuous rotation
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;

        // Floating motion
        const floatOffset = Math.sin(time * 0.001 * mesh.userData.floatSpeed) * mesh.userData.floatRange;
        mesh.position.y = mesh.userData.initialPosition.y + floatOffset;

        // Mouse interaction
        const mouseInfluence = 0.5;
        mesh.position.x = mesh.userData.initialPosition.x + mouseRef.current.x * mouseInfluence;
        mesh.position.z = mesh.userData.initialPosition.z + mouseRef.current.y * mouseInfluence;

        // Pulsing effect
        const scale = 1 + Math.sin(time * 0.002 + index) * 0.1;
        mesh.scale.setScalar(scale);
      });

      // Camera subtle movement
      camera.position.x = Math.sin(time * 0.0005) * 0.5;
      camera.position.y = Math.cos(time * 0.0007) * 0.3;
      camera.lookAt(0, 0, 0);

      // Light animation
      pointLight1.position.x = Math.sin(time * 0.001) * 15;
      pointLight1.position.z = Math.cos(time * 0.001) * 15;
      pointLight2.position.x = Math.cos(time * 0.0008) * -15;
      pointLight2.position.z = Math.sin(time * 0.0008) * -15;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Start animation
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    meshesRef.current = meshes;

    // Start animation and set loaded state
    frameRef.current = requestAnimationFrame(animate);
    setTimeout(() => setIsLoaded(true), 500);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Content */}
      <div className="container max-w-4xl mx-auto text-center z-10 relative" style={{ zIndex: 2 }}>
        <div className="space-y-8">
          {/* Main heading with advanced animations */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
            <span 
              className={`inline-block transform transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-12'
              }`}
              style={{ 
                animationDelay: '0ms',
                textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            >
              Hi, I'm
            </span>
            <span 
              className={`inline-block transform transition-all duration-1000 ease-out ml-4 ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-150'
              }`}
              style={{ 
                animationDelay: '200ms',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
              }}
            >
              Anshul
            </span>
            <span 
              className={`inline-block transform transition-all duration-1000 ease-out ml-2 ${
                isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 -rotate-12'
              }`}
              style={{ 
                animationDelay: '400ms',
                background: 'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 25px rgba(16, 185, 129, 0.5)'
              }}
            >
              Kotwal
            </span>
          </h1>

          {/* Animated subtitle */}
          <div className="relative">
            <p 
              className={`text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto transform transition-all duration-1200 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
              style={{ 
                animationDelay: '600ms',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              I create{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-semibold">
                  extraordinary
                </span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse opacity-60">
                  extraordinary
                </span>
              </span>{' '}
              web experiences with cutting-edge technologies.
              <br />
              Specializing in immersive frontend development with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-semibold">
                3D animations
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                interactive interfaces
              </span>
              .
            </p>
          </div>

          {/* Enhanced CTA button */}
          <div 
            className={`pt-8 transform transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
            }`}
            style={{ animationDelay: '800ms' }}
          >
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95"
              style={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 3s ease infinite',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg 
                  className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          animationDelay: '1000ms',
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide">
          Scroll to explore
        </span>
        <div className="relative">
          <ArrowDown 
            className="h-6 w-6 text-blue-400 relative z-10" 
            style={{
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))',
              animation: 'bounce 2s infinite'
            }}
          />
          <div className="absolute inset-0 h-6 w-6 bg-blue-400 rounded-full blur-lg opacity-40 animate-pulse" />
        </div>
      </div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};