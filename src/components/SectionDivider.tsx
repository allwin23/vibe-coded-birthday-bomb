import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const icons = [<Heart />, <Sparkles />, <Star />];

const SectionDivider = () => {
  return (
    <div className="relative h-48 my-12">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500 to-pink-500"></div>
          <div className="flex items-center justify-center space-x-4 mx-4">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                className="text-white"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {React.cloneElement(icon, { className: 'w-8 h-8 text-pink-400' })}
              </motion.div>
            ))}
          </div>
          <div className="w-1/3 h-px bg-gradient-to-l from-transparent via-blue-500 to-pink-500"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionDivider;
