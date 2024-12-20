'use client';
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Next.Js Developer',
        1500,
        'Software Engineer',
        1500,
        'Programmer',
        1500
      ]}
      speed={50}
      className='text-[#D1D1AD]'
      repeat={Infinity}
    />
  );
};

export default TextEffect;