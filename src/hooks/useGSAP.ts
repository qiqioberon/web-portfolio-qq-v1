import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function useGSAPScrollTrigger() {
  useEffect(() => {
    // Refresh ScrollTrigger after all content is loaded
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}

export function useSplitTextAnimation(selector: string, options?: gsap.TweenVars) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      const text = element.textContent || '';
      element.innerHTML = text
        .split('')
        .map((char) => `<span class="char inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');
      
      gsap.fromTo(
        element.querySelectorAll('.char'),
        { 
          opacity: 0, 
          y: 50,
          rotateX: -90 
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.02,
          ...options
        }
      );
    });
  }, [selector, options]);
}
