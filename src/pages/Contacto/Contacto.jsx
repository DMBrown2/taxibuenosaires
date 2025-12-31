import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="contacto-title">Contacto</h2>
        <p className="contacto-subtitle">
          Comunicate con nosotros para reservas o consultas.
        </p>

        <div className="contacto-grid">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+5491132681603"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card"
          >
            <FontAwesomeIcon icon={faPhone} className="contacto-icon" />
            <p className="contacto-label">WhatsApp</p>
            <p className="contacto-link">+54 9 11 3268-1603</p>
          </a>

          {/* Horarios */}
          <div className="contacto-card no-click">
            <FontAwesomeIcon icon={faClock} className="contacto-icon" />
            <p className="contacto-label">Atención</p>
            <p>Todos los días</p>
            <p>En cualquier horario</p>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/taxi_baires/"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card"
          >
            <FontAwesomeIcon icon={faInstagram} className="contacto-icon" />
            <p className="contacto-label">Instagram</p>
            <p className="contacto-link">@taxi_baires</p>
          </a>

          {/* Email */}
          <a href="mailto:info.taxibaires@gmail.com" className="contacto-card">
            <FontAwesomeIcon icon={faEnvelope} className="contacto-icon" />
            <p className="contacto-label">Email</p>
            <p className="contacto-link">info.taxibaires@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
