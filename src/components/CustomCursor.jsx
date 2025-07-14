import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const animate = () => {
      ringX += (mouseX - ringX) / 8;
      ringY += (mouseY - ringY) / 8;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
};

export default CustomCursor;