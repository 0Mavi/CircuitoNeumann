import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1 });
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, delay: 1, duration: 1 });
  }, []);

    const handleScroll = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen hero-bg flex flex-col items-center justify-center text-center px-4">
    

      <div className="relative z-10 ">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold tracking-wide text-white">
          EXECUTE
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg md:text-xl text-gray-400">
          Ajude a CPU a organizar o ciclo de processamento enquanto se diverte e aprende!
        </p>
    
        <button
          ref={buttonRef}
          onClick={handleScroll}
          className="mt-8 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
        >
          Explore o Ciclo de von Neumann
        </button>
      </div>
    </div>
  );
}