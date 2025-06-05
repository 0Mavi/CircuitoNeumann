import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InfoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".subscribe", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className=" bg-black px-6 py-10 md:py-15 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="info-card relative space-y-4 ml-6 md:ml-0"
            >
            <div className="absolute text-[100px] md:text-[150px] text-white/10 font-bold -top-6 -left-10 md:-left-14">
                {item.id}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                {item.title}
            </h3>
            <p className="text-gray-300 mr-4">{item.description}</p>
            </div>
        ))}
      </div>

     
    </div>
  );
}

const data = [
  {
    id: "1",
    title: "Salas da CPU",
    description:
      "Cada sala representa um componente essencial da arquitetura de von Neumann. Você poderá explorar a memória, os registradores, a unidade de controle e a ALU. Os ambientes são interativos e facilitam o entendimento visual de como cada parte funciona na execução das instruções.",
  },
  {
    id: "2",
    title: "Tarefas da CPU",
    description:
      "Você vivencia o ciclo de instrução da CPU: buscar dados na memória, decodificar comandos e executar operações. Tudo acontece de forma gamificada, permitindo que você interaja com os processos como se estivesse dentro de um computador real.",
  },
  {
    id: "3",
    title: "Ciclos ",
    description:
      "Cada fase do ciclo – FETCH, DECODE e EXECUTE – é transformada em um minijogo. Você busca instruções, interpreta códigos e executa operações, aprendendo de forma prática e divertida o funcionamento da CPU.",
  },
  {
    id: "4",
    title: "Feedback em Tempo",
    description:
      "O jogo fornece feedbacks visuais e sonoros a cada ação, indicando acertos e erros. Ao final de cada etapa, você recebe um resumo do desempenho com sugestões para evoluir e reforçar o aprendizado.",


  },
];
