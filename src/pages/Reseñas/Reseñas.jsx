import { useRef, useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Reseñas.css";
import Button from "../../components/Button/Button";
import fotoNoraNoemi from "../../assets/images/reseñas/NoraNoemi.png";
import fotoD2B04 from "../../assets/images/reseñas/D2B04.png";
import fotoMelisaPugliese from "../../assets/images/reseñas/MelisaPugliese.png";
import fotoClaudioIrazu from "../../assets/images/reseñas/ClaudioIrazu.png";
import fotoRominaRomano from "../../assets/images/reseñas/RominaRomano.png";
import fotoDarioJordan from "../../assets/images/reseñas/DarioJordan.png";
import fotoCarlaChiappe from "../../assets/images/reseñas/CarlaChiappeSgalla.png";
import fotoJoaquinMercado from "../../assets/images/reseñas/JoaquinMercado.png";
import fotoCarinaVolonte from "../../assets/images/reseñas/CarinaVolonte.png";
import fotoCarolinaE from "../../assets/images/reseñas/CarolinaE.png";
import fotoAlejoRodriguez from "../../assets/images/reseñas/AlejoRodriguez.png";
import fotoLucasVeliz from "../../assets/images/reseñas/LucasVeliz.png";

const reseñas = [
     {
    id: 1,
    nombre: "Nora Noemi",
    foto: fotoNoraNoemi,
    estrellas: 5,
    texto: "Excelente servicio. Tuve que buscar a una persona a Ezeiza, llegó puntual. Taxis con licencia. Serán mis taxis/remises, ya adoptados!!!!"
  },
  {
    id: 2,
    nombre: "D2B04",
    foto: fotoD2B04,
    estrellas: 5,
    texto: "Muy bueenas atención y predisposición, luego de que me hayan cancelado un vuelo, de los 10/13 rafiotaxi que llame, fueron lo unicos predispuestos a darme una mano y resolver el problema de traslado con valijas y mascota"
  },
  {
    id: 3,
    nombre: "Melisa Pugliese",
    foto: fotoMelisaPugliese,
    estrellas: 5,
    texto: "Excelente servicio, le agradezco al chofer Claudio su atención y amabilidad. El vehículo estaba limpio y muy confortable. Recomendable!!!"
  },
  {
    id: 4,
    nombre: "Claudio Irazu",
    foto: fotoClaudioIrazu,
    estrellas: 5,
    texto: "Muy buen servicio .puntualidad y buen precio"
  },
  {
    id: 5,
    nombre: "Romina Romano",
    foto: fotoRominaRomano,
    estrellas: 5,
    texto: "Execelente servicio;  atención personalizada y súper cordiales. Realmente para recomendar Viajas tranquilo y seguro al mismo tiempo Gracias por cuidar de los pasajeros Sigan así 😃"
  },
  {
    id: 6,
    nombre: "Dario Jordan",
    foto: fotoDarioJordan,
    estrellas: 5,
    texto: "Servicio puntual y eficiente. Muy correcta atención. Recomendable."
  },
  {
    id: 7,
    nombre: "carla chiappe sgalla",
    foto: fotoCarlaChiappe,
    estrellas: 5,
    texto: "Excelente servicio. Le escribimos de último minuto desde Bs as, queríamos regresar a nuestras casa en Mar del Plata y por feriado largo no conseguimos forma de volver. Alan sin ningún problema comprendió la situación y nos aceptó el viaje en el momento, en menos de 40 minutos lo teníamos en la puerta del hotel con la mejor predisposición para hacer terrible viaje hasta Mar del Plata en el peor horario. La verdad que súper recomendable, 6 hs con muchas risas y buena onda."
  },
  {
    id: 8,
    nombre: "Joaquin Mercado",
    foto: fotoJoaquinMercado,
    estrellas: 5,
    texto: "Servicio excelente Taxi Baires!!! Alan y Leo siempre a disposición y con disponibilidad para incluso hacer viajes a lugares por fuera de CABA!"
  },
  {
    id: 9,
    nombre: "Carina Volonté",
    foto: fotoCarinaVolonte,
    estrellas: 5,
    texto: "Todo perfecto, el servicio impecable , puntual, Muy buen chófer, lo recomiendo 100%"
  },
  {
    id: 10,
    nombre: "Carolina E",
    foto: fotoCarolinaE,
    estrellas: 5,
    texto: "Muy buen servicio de taxi baires. Cómodos y limpios los autos. Los choferes super puntuales y atentos."
  },
  {
    id: 11,
    nombre: "Alejo Rodriguez",
    foto: fotoAlejoRodriguez,
    estrellas: 5,
    texto: "Excelente serviciooo!"
  },
  {
    id: 12,
    nombre: "Lucas Veliz",
    foto: fotoLucasVeliz,
    estrellas: 5,
    texto: "Excelente servicio, super profesionales y de confianza!"
  }
  ];


export default function Reseñas() {
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Ajustar items por página según ancho
  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 4 : 1);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Calcular número de páginas
  const totalPages = Math.ceil(reseñas.length / itemsPerPage);

  // Detectar página activa
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / clientWidth);
        setActivePage(index);
      }
    };
    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll al hacer click en un puntito
  const scrollToPage = (page) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: page * clientWidth,
        behavior: "smooth",
      });
    }
  };


  
  return (
    <section id="reseñas" className="section-reseñas">
      <div className="reseñas-container">
        <SectionTitle
          titulo="Reseñas"
          descripcion="Descubrí lo que dicen los clientes de nuestro servicio."
        />

     <div className="reseñas-scroll" ref={scrollRef}>
        {reseñas.map((r) => (
          <div key={r.id} className="reseña-card">
            <img src={r.foto} alt={r.nombre} className="reseña-foto" loading="lazy" />
            <h3 className="reseña-nombre">{r.nombre}</h3>
            <div className="reseña-estrellas">
              {"★".repeat(r.estrellas)}{"☆".repeat(5 - r.estrellas)}
            </div>
            <p className="reseña-texto">{r.texto}</p>
          </div>
        ))}
      </div>

      {/* Indicadores (puntitos) */}
      <div className="reseñas-dots">
         {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activePage ? "active" : ""}`}
            onClick={() => scrollToPage(index)}
          />
        ))}      
      </div>

      {/* <div className="ver-mas-container">
        <a href="https://www.google.com/maps/place/taxibaires/@-34.5980092,-58.4317421,17z/data=!4m18!1m9!3m8!1s0x95bccb4e2788eab5:0xe491463e666cbfce!2staxibaires!8m2!3d-34.5980092!4d-58.4317421!9m1!1b1!16s%2Fg%2F11x_9ln31t!3m7!1s0x95bccb4e2788eab5:0xe491463e666cbfce!8m2!3d-34.5980092!4d-58.4317421!9m1!1b1!16s%2Fg%2F11x_9ln31t?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">

        <Button variant="outline" size="big" >
          Ver más reseñas
        </Button>
        </a>
      </div> */}

      </div>
    </section>
  );
}
