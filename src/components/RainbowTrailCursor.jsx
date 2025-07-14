import { useEffect } from "react";

const RainbowTrailCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      // Remove after fade animation
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default RainbowTrailCursor;