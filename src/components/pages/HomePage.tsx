import { Hero } from '@/components/sections/Hero/Hero';
import { Stats } from '@/components/sections/Stats/Stats'; // MOVED UP: Immediate credibility
import { ValuePropositions } from '@/components/sections/ValuePropositions/ValuePropositions'; // NEW: Hardware+Software narrative
import { About } from '@/components/sections/About/About';
import { Skills } from '@/components/sections/Skills/Skills';
import { Experience } from '@/components/sections/Experience/Experience';
import { Projects } from '@/components/sections/Projects/Projects';
import { Connect } from '@/components/sections/Connect/Connect';
import { Contact } from '@/components/sections/Contact/Contact';
import { FunFact } from '@/components/sections/FunFact/FunFact';

export const HomePage = () => {
  return (
    <>
      {/* PHASE 1: Immediate Impact (0-10 seconds) */}
      <Hero />
      
      {/* PHASE 2: Professional Foundation (10-30 seconds) */}
      <Stats /> {/* Quick credibility stats */}
      <About /> {/* Narrative about me */}
      <ValuePropositions /> {/* Unique value blend */}
      
      {/* PHASE 3: Technical Demonstration (30-60 seconds) */}
      <Skills /> {/* Contextual skills */}
      <Projects /> {/* Tiered project showcase */}
      
      {/* PHASE 4: Depth & Complexity (1-2 minutes) */}
      <Experience /> {/* Impact-focused timeline */}
      
      {/* PHASE 5: Professional Context (2-3 minutes) */}
      <Connect /> {/* Social proof */}
      <Contact /> {/* Clear next steps */}
      <FunFact /> {/* Personality - kept at end */}
    </>
  );
};