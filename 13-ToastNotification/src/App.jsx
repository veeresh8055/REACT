import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timer;

    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <div className="app">
      <button className="btn" onClick={() => setShowToast(true)}>
        Show Notification
      </button>

      {showToast && (
        <div className="toast">
          <span>✅ Task completed successfully!</span>
          <button className="close" onClick={() => setShowToast(false)}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default App;