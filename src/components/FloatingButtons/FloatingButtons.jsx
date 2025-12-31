import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./FloatingButtons.css";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp: siempre visible, abajo derecha */}
      <a
        className="btn-float btn-wsp"
        href="https://wa.me/+5491132681603"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </a>
      {/* Ir arriba: solo visible con scroll, abajo izquierda */}
      {show && (
        <button
          className="btn-float btn-top"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </>
  );
}