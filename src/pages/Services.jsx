import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const threeContainerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const composerRef = useRef(null);
  const cardsRef = useRef([]);
  const connectionsRef = useRef([]);
  const animationRef = useRef(null);
  const rotationTimerRef = useRef(null);
  const globeRef = useRef(null);
  const particlesRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Digital Strategy and Planning",
      description: "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue.",
      fullDescription: "Our digital strategy services encompass comprehensive market analysis, competitor research, and data-driven planning. We develop customized roadmaps that align with your business objectives, ensuring measurable growth in brand visibility and revenue generation through innovative digital solutions.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      threeColor: 0x3b82f6
    },
    {
      id: 2,
      title: "Creative Strategy and Web Graphics Design",
      description: "Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or..",
      fullDescription: "Our creative team specializes in crafting visually stunning designs that tell your brand's story. From comprehensive web graphics to engaging social media visuals, we ensure every design element resonates with your target audience and strengthens your brand identity across all digital touchpoints.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      threeColor: 0x8b5cf6
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels…",
      fullDescription: "We develop and execute comprehensive social media strategies across platforms like Facebook, Instagram, Twitter, LinkedIn, and emerging channels. Our approach includes content creation, community management, paid advertising, and performance analytics to build meaningful connections with your audience.",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      threeColor: 0x10b981
    },
    {
      id: 4,
      title: "Videos, GIFs and Content Marketing",
      description: "Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos.",
      fullDescription: "Our content marketing team creates compelling video content, engaging GIFs, and strategic written content that drives engagement and conversions. We focus on storytelling that captures attention and delivers your message effectively across all digital platforms.",
      icon: "🎬",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      threeColor: 0xef4444
    },
    {
      id: 5,
      title: "Website Design and Development",
      description: "We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and…",
      fullDescription: "We create responsive, user-centric websites that provide exceptional user experiences. Our development process incorporates the latest technologies, SEO best practices, and conversion optimization techniques to ensure your website not only looks great but performs exceptionally.",
      icon: "💻",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      threeColor: 0x4f46e5
    },
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations…",
      fullDescription: "Our SEO services include comprehensive technical audits, keyword research, on-page optimization, content strategy, and link building. We provide transparent reporting and work diligently to improve your search engine rankings and drive qualified organic traffic to your website.",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      threeColor: 0xf59e0b
    },
    {
      id: 7,
      title: "Email Marketing",
      description: "We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised.",
      fullDescription: "We design and execute targeted email marketing campaigns that drive engagement and conversions. Our services include list segmentation, automation workflows, A/B testing, and performance analytics to ensure your email marketing delivers measurable results.",
      icon: "📧",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      threeColor: 0x14b8a6
    },
    {
      id: 8,
      title: "Web Analytics",
      description: "Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence.",
      fullDescription: "We implement comprehensive analytics tracking and provide detailed insights into user behavior, conversion patterns, and campaign performance. Our data-driven approach helps you make informed decisions to optimize your digital presence and maximize ROI.",
      icon: "📊",
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
      threeColor: 0x6b7280
    },
    {
      id: 9,
      title: "Media Planning and Buying",
      description: "We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution.",
      fullDescription: "Our media planning and buying services ensure your advertising budget is spent efficiently across digital channels. We negotiate optimal placements, monitor campaign performance, and continuously optimize to maximize your media ROI.",
      icon: "📺",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      threeColor: 0x8b5cf6
    },
    {
      id: 10,
      title: "Shopify Website & Development",
      description: "Looking for a Shopify website development company? You've landed on just the right page!",
      fullDescription: "We specialize in creating custom Shopify stores that drive sales and provide exceptional shopping experiences. Our services include theme customization, app integration, payment gateway setup, and ongoing maintenance to ensure your e-commerce store operates smoothly and profitably.",
      icon: "🛍️",
      color: "from-green-600 to-lime-500",
      bgColor: "bg-gradient-to-br from-green-50 to-lime-50",
      threeColor: 0x22c55e
    }
  ];

  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Initialize Three.js scene
    const initThreeScene = () => {
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a1a);
      scene.fog = new THREE.Fog(0x0a0a1a, 10, 50);
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        60,
        threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 25;
      camera.position.y = 8;
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(
        threeContainerRef.current.clientWidth,
        threeContainerRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      threeContainerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Post-processing
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);
      
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.2,
        0.4,
        0.85
      );
      composer.addPass(bloomPass);
      composerRef.current = composer;

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.minDistance = 15;
      controls.maxDistance = 40;
      controls.enablePan = false;
      controls.autoRotate = false;
      controls.maxPolarAngle = Math.PI / 2;
      controlsRef.current = controls;

      // Enhanced Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(15, 20, 10);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      const hemisphereLight = new THREE.HemisphereLight(0x00a8ff, 0xff00ff, 0.5);
      scene.add(hemisphereLight);

      // Create Earth-like globe
      createGlobe();

      // Create particles background
      createParticles();

      // Create cards in orbit
      createOrbitingCards();

      // Create connections
      createConnections();

      // Handle window resize
      window.addEventListener('resize', handleResize);

      // Start animation loop
      animate();

      // Start auto rotation
      startAutoRotation();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (rotationTimerRef.current) {
          clearInterval(rotationTimerRef.current);
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        controls.dispose();
        renderer.dispose();
        while(threeContainerRef.current.firstChild) {
          threeContainerRef.current.removeChild(threeContainerRef.current.firstChild);
        }
      };
    };

    const createGlobe = () => {
      // Main globe
      const globeGeometry = new THREE.SphereGeometry(6, 64, 64);
      const globeMaterial = new THREE.MeshPhongMaterial({
        color: 0x1e40af,
        emissive: 0x0a0a2a,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
        wireframe: true
      });
      
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);
      globe.position.y = 2;
      sceneRef.current.add(globe);
      globeRef.current = globe;

      // Inner core
      const coreGeometry = new THREE.SphereGeometry(4, 32, 32);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      globe.add(core);

      // Atmosphere
      const atmosphereGeometry = new THREE.SphereGeometry(7, 32, 32);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      globe.add(atmosphere);
    };

    const createParticles = () => {
      const particlesCount = 1000;
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
      const sizes = new Float32Array(particlesCount);

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const radius = 20 + Math.random() * 30;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.cos(phi);
        positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

        colors[i3] = 0.2 + Math.random() * 0.8;
        colors[i3 + 1] = 0.3 + Math.random() * 0.7;
        colors[i3 + 2] = 0.8 + Math.random() * 0.2;

        sizes[i] = Math.random() * 0.5;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      sceneRef.current.add(particles);
      particlesRef.current = particles;
    };

    const createOrbitingCards = () => {
      const radius = 12;
      const cardCount = services.length;
      const angleStep = (Math.PI * 2) / cardCount;
      const heightVariation = 8;
      
      cardsRef.current = [];

      services.forEach((service, index) => {
        // Create card geometry with rounded edges
        const shape = new THREE.Shape();
        const width = 3;
        const height = 2;
        const radius = 0.2;
        
        shape.moveTo(-width/2 + radius, -height/2);
        shape.lineTo(width/2 - radius, -height/2);
        shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
        shape.lineTo(width/2, height/2 - radius);
        shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
        shape.lineTo(-width/2 + radius, height/2);
        shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
        shape.lineTo(-width/2, -height/2 + radius);
        shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
        
        const extrudeSettings = {
          depth: 0.1,
          bevelEnabled: true,
          bevelSegments: 2,
          steps: 2,
          bevelSize: 0.05,
          bevelThickness: 0.05
        };
        
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // Create gradient material
        const material = new THREE.MeshPhongMaterial({ 
          color: service.threeColor,
          emissive: service.threeColor,
          emissiveIntensity: 0.2,
          shininess: 100,
          transparent: true,
          opacity: 0.9
        });

        // Create mesh
        const card = new THREE.Mesh(geometry, material);
        card.castShadow = true;
        
        // Position in 3D orbit with height variation
        const angle = index * angleStep;
        const heightOffset = Math.sin(index * 0.8) * (heightVariation / 2);
        
        card.position.x = Math.cos(angle) * radius;
        card.position.y = heightOffset + 2;
        card.position.z = Math.sin(angle) * radius;
        
        // Rotate to face center
        card.lookAt(0, card.position.y, 0);
        card.rotation.x = -Math.PI / 8;
        
        // Store references
        card.userData.originalPosition = card.position.clone();
        card.userData.originalRotation = card.rotation.clone();
        card.userData.index = index;
        card.userData.service = service;
        card.userData.hovered = false;
        card.userData.targetScale = new THREE.Vector3(1, 1, 1);
        card.userData.pulse = 0;
        card.userData.speed = 0.5 + Math.random() * 0.5;
        
        sceneRef.current.add(card);
        cardsRef.current.push(card);

        // Add icon/text
        createCardIcon(card, service);
      });
    };

    const createCardIcon = (card, service) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      
      // Draw background gradient
      const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, `rgba(${Math.floor(service.threeColor >> 16)}, ${Math.floor((service.threeColor >> 8) & 255)}, ${Math.floor(service.threeColor & 255)}, 0.8)`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, 256, 256);
      
      // Draw icon text
      context.font = 'bold 120px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(service.icon, 128, 128);
      
      const texture = new THREE.CanvasTexture(canvas);
      const iconMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const iconGeometry = new THREE.CircleGeometry(0.5, 32);
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.z = 0.06;
      icon.position.y = 0.3;
      card.add(icon);
    };

    const createConnections = () => {
      connectionsRef.current = [];
      
      for (let i = 0; i < services.length; i++) {
        const nextIndex = (i + 1) % services.length;
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineDashedMaterial({
          color: 0x3b82f6,
          linewidth: 1,
          scale: 1,
          dashSize: 0.5,
          gapSize: 0.2,
          transparent: true,
          opacity: 0.3
        });
        
        const line = new THREE.Line(geometry, material);
        line.computeLineDistances();
        sceneRef.current.add(line);
        connectionsRef.current.push(line);
      }
    };

    const updateConnections = () => {
      connectionsRef.current.forEach((line, index) => {
        const nextIndex = (index + 1) % services.length;
        const card1 = cardsRef.current[index];
        const card2 = cardsRef.current[nextIndex];
        
        if (card1 && card2) {
          const points = [
            card1.position,
            card2.position
          ];
          
          line.geometry.setFromPoints(points);
          line.geometry.attributes.position.needsUpdate = true;
        }
      });
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      
      // Rotate globe
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.001;
      }
      
      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0002;
        particlesRef.current.rotation.x += 0.0001;
      }
      
      // Update cards with orbital motion
      cardsRef.current.forEach((card, index) => {
        if (!card.userData.originalPosition) return;
        
        // Orbital motion
        const angle = time * 0.2 + (index * Math.PI * 2 / services.length);
        const radius = 12;
        const heightVariation = 8;
        const heightOffset = Math.sin(time * card.userData.speed + index) * (heightVariation / 4);
        
        card.position.x = Math.cos(angle) * radius;
        card.position.y = card.userData.originalPosition.y + heightOffset;
        card.position.z = Math.sin(angle) * radius;
        
        // Make card face center
        card.lookAt(0, card.position.y, 0);
        card.rotation.x = -Math.PI / 8;
        
        // Pulse effect
        if (card.userData.hovered || index === activeCard) {
          card.userData.pulse = Math.sin(time * 10) * 0.1 + 1.1;
          card.material.emissiveIntensity = 0.5 + Math.sin(time * 8) * 0.3;
        } else {
          card.userData.pulse = 1;
          card.material.emissiveIntensity = 0.2;
        }
        
        // Apply scale
        card.scale.lerp(
          new THREE.Vector3(
            card.userData.pulse,
            card.userData.pulse,
            card.userData.pulse
          ),
          0.1
        );
        
        // Highlight active card
        if (index === activeCard) {
          card.material.color.setHex(0xffffff);
          card.material.opacity = 1;
        } else if (index === hoveredCard) {
          card.material.color.setHex(0xffffff);
          card.material.opacity = 0.8;
        } else {
          card.material.color.setHex(card.userData.service.threeColor);
          card.material.opacity = 0.6;
        }
      });
      
      // Update connections
      updateConnections();
      
      // Auto rotate scene
      if (autoRotate && sceneRef.current) {
        sceneRef.current.rotation.y += 0.0005;
      }
      
      controlsRef.current.update();
      composerRef.current.render();
    };

    const startAutoRotation = () => {
      if (rotationTimerRef.current) {
        clearInterval(rotationTimerRef.current);
      }

      rotationTimerRef.current = setInterval(() => {
        if (autoRotate) {
          setActiveCard(prev => (prev + 1) % services.length);
        }
      }, 3000);
    };

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !threeContainerRef.current) return;
      
      cameraRef.current.aspect = threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        threeContainerRef.current.clientWidth,
        threeContainerRef.current.clientHeight
      );
      composerRef.current.setSize(
        threeContainerRef.current.clientWidth,
        threeContainerRef.current.clientHeight
      );
    };

    // Start the scene
    const cleanup = initThreeScene();

    return cleanup;
  }, [services.length, autoRotate, activeCard, hoveredCard]);

  const handleCardClick = (index) => {
    setActiveCard(index);
    setAutoRotate(false);
    
    // Smooth camera movement to focus on selected card
    if (cardsRef.current[index] && cameraRef.current) {
      const card = cardsRef.current[index];
      const targetPosition = card.position.clone();
      targetPosition.multiplyScalar(1.5);
      targetPosition.y += 3;
      
      // Animate camera to target
      const animateCamera = () => {
        cameraRef.current.position.lerp(targetPosition, 0.05);
        cameraRef.current.lookAt(card.position);
        controlsRef.current.target.copy(card.position);
        
        if (cameraRef.current.position.distanceTo(targetPosition) > 0.1) {
          requestAnimationFrame(animateCamera);
        }
      };
      animateCamera();
    }
    
    // Reset auto rotation after 10 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-20 px-4 overflow-hidden relative">
      {/* Three.js Animation Container - Full Screen */}
      <div 
        ref={threeContainerRef}
        className="fixed inset-0 w-full h-full pointer-events-auto"
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Digital Universe
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our services orbiting in a cosmic 3D space. Each service is a planet in our digital universe.
          </p>
          
          {/* Interactive Controls */}
          <div className="mt-8 inline-flex items-center space-x-6 bg-black/30 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/10">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${autoRotate ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-gray-300">
                {autoRotate ? 'Auto-rotation ON' : 'Auto-rotation OFF'}
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-300">👆</span>
              </div>
              <span className="text-gray-300">Click cards to focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-300">🖱️</span>
              </div>
              <span className="text-gray-300">Drag to navigate 3D</span>
            </div>
          </div>
        </motion.div>

        {/* Active Service Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeCard}
          className="mb-12 relative z-20"
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
            <div className="flex items-start space-x-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${services[activeCard]?.color} flex items-center justify-center text-3xl text-white shadow-lg animate-pulse`}>
                {services[activeCard]?.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {services[activeCard]?.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                    Service {activeCard + 1} of {services.length}
                  </span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {services[activeCard]?.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={sectionRef} className="relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={() => handleCardClick(index)}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                  index === activeCard 
                    ? 'ring-2 ring-cyan-400 ring-opacity-50 shadow-2xl shadow-cyan-500/30' 
                    : 'shadow-lg hover:shadow-xl hover:shadow-blue-500/20'
                } ${service.bgColor} bg-opacity-20 border border-white/20`}
                style={{
                  transform: index === activeCard ? 'translateY(-5px)' : 'none',
                  background: `linear-gradient(135deg, ${service.bgColor.replace('bg-gradient-to-br ', '')}, rgba(255,255,255,0.1))`
                }}
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-xl text-white shadow-md mb-4`}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 line-clamp-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Active indicator */}
                {index === activeCard && (
                  <>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  </>
                )}
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 relative z-20"
        >
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-12 shadow-2xl border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Launch Your Digital Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Each service in our universe is designed to propel your business forward. Let's build something amazing together.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)",
                background: "linear-gradient(45deg, #06b6d4, #8b5cf6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Start Your Mission
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
        
        /* Selection color */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;