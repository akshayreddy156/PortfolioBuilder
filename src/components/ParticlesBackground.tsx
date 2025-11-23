import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const { mode } = useContext(ThemeContext);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: mode === "dark" ? "#222831" : "#ffffff",
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
            resize: {
              enable: true,
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: mode === "dark" ? "#00ADB5" : "#1976d2",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 20,
          },
          opacity: {
            value: {
              min: 0.5,
              max: 0.9,
            },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shadow: {
            blur: 10,
            color: {
              value: mode === "dark" ? "#00ADB5" : "#1976d2",
            },
            enable: true,
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 8, max: 20 },
          },
          stroke: {
            color: mode === "dark" ? "#00ADB5" : "#1976d2",
            width: 3,
          },
        },
        detectRetina: true,
      }}
    />
  );
}