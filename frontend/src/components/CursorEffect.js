import { useEffect } from "react";
import "../styles/style.css"; // Import your existing CSS file

const CursorEffect = () => {
  useEffect(() => {
    // Create the cursor effect element
    const cursorEffect = document.createElement("div");
    cursorEffect.id = "cursor-effect";
    document.body.appendChild(cursorEffect);

    // Update cursor position on mouse move
    const handleMouseMove = (e) => {
      cursorEffect.style.top = `${e.pageY - 50}px`;
      cursorEffect.style.left = `${e.pageX - 50}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursorEffect);
    };
  }, []);

  return null; // No DOM element is rendered directly
};

export default CursorEffect;
