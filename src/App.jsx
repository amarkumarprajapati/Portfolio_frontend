// App.jsx

import React, { useRef } from 'react';
import IndexRoutes from './Routes/IndexRoutes'; 

const App = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollTop + 2,
        behavior: 'smooth',
      });
    }
  };
  React.useEffect(() => {
    const scrollInterval = setInterval(handleScroll, 20); 
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div ref={containerRef} style={{  scrollBehavior: 'smooth' }}>
      <div>
        <IndexRoutes />
      </div>
    </div>
  );
};

export default App;
