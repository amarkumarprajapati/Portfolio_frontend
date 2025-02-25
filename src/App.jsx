import React, { useRef, useEffect } from "react";
import IndexRoutes from "./Routes/IndexRoutes";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";

const App = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollTop + 2,
        behavior: "smooth",
      });
    }
  };
  React.useEffect(() => {
    const scrollInterval = setInterval(handleScroll, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div ref={containerRef} style={{ scrollBehavior: "smooth" }}>
      <div>
        <Provider store={store}>
          <IndexRoutes />
        </Provider>
      </div>
    </div>
  );
};

export default App;
