import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VonNeumann from "../../assets/imagem1.png"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // quando o topo do elemento chega a 80% da viewport
          toggleActions: "play none none none", 
          // play, pause, resume, reset - respectivamente para onEnter, onLeave, onEnterBack e onLeaveBack
        },
      });

      timeline
        .from(".title", {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".description",
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6" // sobreposição no tempo com o anterior
        )
        .from(
          ".mask-image",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black min-h-screen text-white px-6 py-10 md:py-16 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Texto */}
      <div className="max-w-lg space-y-6">
        <h2 className="title text-3xl md:text-5xl font-semibold">
          INTERFACE <span className="text-blue-300">NEUMANN</span>
        </h2>
        <p className="description italic text-gray-300">
          “Ao colocar os óculos, tudo ficou mais claro: as instruções dançavam, os dados corriam — e eu entendi como a CPU pensava!
        </p>
        <div className="description text-gray-400 text-sm md:text-base space-y-4">
            <p>
            <strong>Circuito de Neumann</strong> é um jogo educativo em 3D onde você se torna um agente digital dentro da CPU. Seu objetivo é organizar o ciclo de instruções do computador de forma prática e divertida.
          </p>
          <p>
            Você vai interagir com os principais componentes da arquitetura de von Neumann, como registradores, memória, unidade de controle e ALU, executando instruções passo a passo.
          </p>
          <p>
            Tudo acontece em um ambiente lúdico, com desafios leves que simulam o funcionamento real do computador, promovendo o aprendizado por meio da experimentação e da lógica.
        </p>
        </div>
      </div>

      {/* Imagem */}
      <div className="flex-shrink-0">
        <img
          src={VonNeumann}
          alt="Von Neumann"
          className="w-64 md:w-96 lg:w-96 object-contain mask"
        />
      </div>
    </div>
  );
}
