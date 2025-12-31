import taxiHeader from '../../assets/images/banner/banner1.jpg';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';

export default function Banner() {
  return (
    <section className="section-banner" style={{ backgroundImage: `url(${taxiHeader})` }}>
      <div className="overlay">
        <div className="banner-content">
          <h1 className="titulo-banner">Tu taxi de confianza en Buenos Aires</h1>
          <p className="parrafo-banner">Rápido, seguro y siempre a tu lado.</p>

          <a 
          className='banner-cta'
          href="https://wa.me/+5491132681603"
          target='_blank'
          rel='"noopener noreferrer"'>

          <Button variant="primary" size="large">Reservá tu viaje
    <span className="cta-icon">
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
    </span>
          </Button>
          </a>

        </div>
      </div>
    </section>
  );
}

