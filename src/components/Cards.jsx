import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";


const Cards = (props) => {
  const { title, description, img, link } = props;
  return (
    <div className="grid">
      <TiltCard title={title} description={description} img={img} link={link} />
    </div>
  );
};

const ROTATION_RANGE = 8;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = (props) => {
  const {title, description, img, link }= props;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x,{
    stiffness:100,
    damping:20,
    mass:0.5
  })

  const ySpring = useSpring(y,{
    stiffness:100,
    damping:20,
    mass:0.5
  });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        
      }}
      className="relative h-96 w-96 rounded-xl bg-transparent border-double border-4 border-[#685281] bg-gradient-to-br from-[#b3a4d5]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 place-content-center rounded-xl bg-[#32293d] shadow-lg flow-root "
      >
        <h3
          style={{
            transform: "translateZ(100px) ",
          }}
          className="text-xl font-bold text-[#ebe9f6] text-center"
        >
          {title}
        </h3>
        <p
          className="text-sm max-w-sm mt-2 text-[#c7bfe2] text-center text-wrap py-1"
        >
      {description} 
        </p>
        <div className="h-2/3 w-full bg-cover bg-center bg-no-repeat shadow-customInset animate-borderAnimation rounded-xl"
        style={{
  transform: "translateZ(100px) ",
}}
>
        <a href={link} target="_blank"
        >
        <img
          className="h-2/3 w-full bg-cover bg-center 
          bg-no-repeat shadow-customInset animate-borderAnimation rounded-xl"
          src={img}
          alt="Desarrollo FullStack"     
        />
        </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
