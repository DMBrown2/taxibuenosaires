import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import "./Servicios.css";
import fotoAeropuerto from '../../assets/images/servicios/aeropuerto.webp'
import fotoTurismo from '../../assets/images/servicios/turismo.webp'
import fotoLargaDistancia from '../../assets/images/servicios/larga-distancia.webp'

export default function Servicios() {
  const servicios = [
    {
      titulo: "Traslados al Aeropuerto",
      descripcion:
        "Ezeiza o Aeroparque, te llevamos y te buscamos. Comenzá y terminá tu viaje con la tranquilidad de un servicio puntual y confiable.",
      imagen: fotoAeropuerto,
    },
    {
      titulo: "City Tours",
      descripcion:
        "Descubrí Buenos Aires. Recorré sus rincones más emblemáticos junto a choferes profesionales y bilingües.",
      imagen: fotoTurismo,
    },
      {
      titulo: "Viajes de larga distancia",
      descripcion:
        "Traslados cómodos y seguros fuera de la ciudad. Disfrutá el trayecto, nosotros nos ocupamos del resto.",
      imagen: fotoLargaDistancia,
    },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
     <SectionTitle
          titulo="Nuestros Servicios"
          descripcion="Ofrecemos soluciones de traslado confiables y adaptadas a cada
          necesidad, con una flota moderna y choferes profesionales."
        />

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="servicio-img"
                loading="lazy"
              />
              <div className="servicio-content">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="servicios-cta">
            <a 
          href="https://wa.me/+5491157678654"
          target='_blank'
            >

          <Button variant="primary">
            Consultá por otros servicios
          </Button>
            </a>
</div>

      </div>
    </section>
  );
}
