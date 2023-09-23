// src/components/TextSlide.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PlainText from './PlainText';

const TextSlide = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // This triggers the animation only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`text-slide ${inView ? 'in-view' : ''}`}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <PlainText text={text} />
    </motion.div>
  );
};

export default TextSlide;
