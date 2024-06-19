import React, { useRef, useState, useEffect } from 'react';

export default function ScrollerBlob() {
  const blob = useRef(null);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (blob.current) {
        if (!top) {
          blob.current.style.transform = "translate(0px, -30px)";
          blob.current.style.transition = "transform 0.5s";

          setTop(true);
        } else {
          blob.current.style.transform = "translate(0px, 0px)";
          setTop(false);
        }
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [top]);

  return (
  <div ref={blob} style={{ transition: 'transform 0.7s' }}>
    <div className="element" id="scrollerBlob">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#490B3D" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
    </div>
  </div>
  );
};
