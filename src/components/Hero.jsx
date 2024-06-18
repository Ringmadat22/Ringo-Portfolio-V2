// src/components/Hero.jsx
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Home from './Home';
import '../css/styles.css'; // Create a CSS file to handle the styling
import Navbar from '../components/navbar'
import About from '../components/About'

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          bubble: {
            distance: 200,
            size: 8,
            duration: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 3,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <div className="hero">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      <div className="hero-content">
        <Navbar />
        <section className=" mt-20 w-full flex-col flex justify-center items-center align-center">
          <div className="bg-blue-300 m-10 w-5/6 rounded-lg ">
            <div>
            <About />
            
            </div>
          </div>

          <div className="bg-blue-300 mb-10 w-5/6 rounded-lg ">
            <div>
            <Home />
            </div>
          </div>

          <div className="bg-blue-300 mb-10 w-5/6 rounded-lg">
            <div>
            <About />
            </div>
          </div>

          <div className="bg-blue-300 w-5/6 rounded-lg ">
            <div>
            <About />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
