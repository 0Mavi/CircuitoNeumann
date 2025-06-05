import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

function RobotModel() {
  const { scene } = useGLTF("/models/Neu.glb");
  return <primitive object={scene} scale={1.2} position={[0, -3, 0]} />;
}
useGLTF.preload("/models/Neu.glb");

export default function RobotSection() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(modelRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // limpa animações ao desmontar
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Modelo 3D */}
        <div
          ref={modelRef}
          className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl flex items-center justify-center"
        >
          <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <RobotModel />
            
          </Canvas>
        </div>

        {/* Texto */}
        <div ref={textRef} className="w-full md:w-1/2 space-y-6">
        
          <h2 className="text-4xl md:text-5xl font-bold">
            ROBO<span className="text-blue-300"> NEU</span>
          </h2>
          <p className="text-gray-300">
            Você é o Neu, um agente digital em missão dentro de um computador. Seu objetivo é completar o ciclo de execução de instruções, explorando a CPU por dentro e desvendando como os dados circulam entre memória, registradores, unidade de controle e ALU.
Aprenda, interaja e evolua enquanto vive essa jornada tecnológica em 3D
          </p>
           <p className="text-gray-300">
            Esse jogo faz parte de um projeto educacional. Sua participação é essencial para que ele continue crescendo. Responda ao formulário e contribua com a evolução do Circuito de Neumann.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="https://forms.gle/nLSPQjDwAdWdHzc57" target="_blank">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition">
              Formulário
            </button>
          </a>
            <button className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-6 py-3 rounded-md transition">
              Em Breve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
