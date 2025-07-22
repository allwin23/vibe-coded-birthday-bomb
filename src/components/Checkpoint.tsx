import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CheckpointProps {
  title: string;
  position: 'left' | 'right';
}

const Checkpoint: React.FC<CheckpointProps> = ({ title, position }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, x: position === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`absolute top-1/2 -translate-y-1/2 w-48 hidden md:flex items-center gap-4 ${
        position === 'left' ? 'left-[-6rem]' : 'right-[-6rem] flex-row-reverse'
      }`}
    >
      <div className="w-px h-24 bg-gradient-to-b from-transparent via-blue-500 to-pink-500"></div>
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-pink-500 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 blur-lg opacity-75"></div>
      </div>
      <p className="text-white font-bold text-lg">{title}</p>
    </motion.div>
  );
};

export default Checkpoint;
