import { WHATSAPP_NUMBER } from '../../config/env.config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faCarSide, faMoneyCheck } from "@fortawesome/free-solid-svg-icons"; 
import "./Nosotros.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Kangoo from "../../assets/images/flota/kangoo.jpeg";
import peugeot from "../../assets/images/flota/peugeot.jpg";
import ChevroletSpin from "../../assets/images/flota/SPIN.webp";
import Button from "../../components/Button/Button";


export default function SobreNosotros() {
  const flota = [
    {
      nombre: "Renault Kangoo",
      descripcion: "Vehículo familiar con amplio espacio para equipaje.",
      imagen: Kangoo,
    },
    {
      nombre: "Peugeot 408",
      descripcion: "Espacioso y elegante, la mejor elección para viajes ejecutivos.",
      imagen: peugeot,
    },
    {
      nombre: "Chevrolet Spin",
      descripcion: "Confortable y espaciosa, ideal para viajes familiares o traslados urbanos.",
      imagen: ChevroletSpin,
    },

  ];

  const caracteristicas = [
    {
      icon: faClock,
      titulo: "Disponibilidad 24/7",
      descripcion: "Estamos siempre listos para tu viaje, a cualquier hora.",
    },
    {
      icon: faShieldAlt,
      titulo: "Seguridad Garantizada",
      descripcion: "Vehículos controlados y choferes profesionales.",
    },
    {
      icon: faCarSide,
      titulo: "Comodidad y Espacio",
      descripcion: "Vehículos modernos, amplios y confortables.",
    },
    {
      icon: faMoneyCheck,
      titulo: "Aceptamos todos los medios de pago",
      descripcion: "Efectivo, tarjetas y transferencias.",
    },
  ];

  return (
   
    <section id="sobre-nosotros" className="sobre-nosotros-section">

      <div className="sobre-nosotros-container">
        <SectionTitle
          titulo="Sobre Nosotros"
          descripcion="Somos una empresa familiar con más de 15 años de experiencia en el traslado de pasajeros.
          Nuestra propia flota de taxis y vans nos permite garantizar seguridad, comodidad y atención personalizada.
          Nos adaptamos a lo que necesitas, siempre."
          />

        <div className="flota-grid">
          {flota.map((vehiculo, index) => (
              <div key={index} className="vehiculo-card">
              <img src={vehiculo.imagen} alt={vehiculo.nombre} className="vehiculo-img" loading="lazy" />
              <div className="vehiculo-content">
                <h3 className="vehiculo-nombre">{vehiculo.nombre}</h3>
                <p className="vehiculo-descripcion">{vehiculo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="nosotros-cta">
          <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target='_blank'
          rel='"noopener noreferrer"'>

          <Button variant="primary" size="medium">
          Reservá tu viaje
          </Button>

          </a>
        </div>

        
      </div>

      <div className="porque-elegirnos-container">
        <SectionTitle
          titulo="¿Por qué elegirnos?"
          descripcion="Cada viaje es una experiencia segura y sin complicaciones."
          />

        <div className="caracteristicas-grid">
          {caracteristicas.map((item, index) => (
            <div key={index} className="caracteristica-card">
              <FontAwesomeIcon icon={item.icon} className="icono" />
              <h4>{item.titulo}</h4>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

</section>          
  );
}
