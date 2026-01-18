import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SplitTextReveal({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1000 }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-[0.25em] inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function CharacterReveal({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-blue-500 opacity-70"
        animate={{
          x: [0, -2, 2, -1, 1, 0],
          opacity: [0.7, 0.4, 0.7, 0.5, 0.7],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        aria-hidden
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-red-500 opacity-70"
        animate={{
          x: [0, 2, -2, 1, -1, 0],
          opacity: [0.7, 0.5, 0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
