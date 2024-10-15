import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBox = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={props} className="p-4 bg-red-500 text-white rounded">
      I slide in from above!
    </animated.div>
  );
};

export default AnimatedBox;
