// src/components/TextSlide.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextSlideRight = ({ text, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 }, // Slide in from the right
    visible: { opacity: 1, x: 0, transition: { delay } }, // Add a delay
  };

  return (
    <motion.div
      ref={ref}
      className={`text-slide ${inView ? 'in-view' : ''}`}
      variants={slideInFromRight}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {text}
    </motion.div>
  );
};

export default TextSlideRight;
