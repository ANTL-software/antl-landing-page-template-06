import { FiArrowUpRight, FiScissors, FiDroplet, FiWind } from "react-icons/fi";
import type { Service } from "../../types";

type ServicesRailProps = { services: Service[] };

export function ServicesRail({ services }: ServicesRailProps) {
  return <section className="salon-services" id="prestations" aria-labelledby="services-title"><div className="section-heading"><p className="eyebrow">01 / La carte</p><h2 id="services-title">Un peu de changement.<br /><span>Beaucoup de vous.</span></h2><p>Votre texture, vos habitudes, vos envies.<br />On part de là pour trouver le bon geste.</p></div><div className="salon-services__grid">{services.map((service) => <article key={service.number}><div className="service-top"><span>/{service.number}</span><span>{service.duration}</span></div><span className={`service-motif service-motif--${service.number}`} aria-hidden="true">{service.number === "01" ? <FiScissors /> : service.number === "02" ? <FiDroplet /> : <FiWind />}</span><h3>{service.title}</h3><p>{service.detail}</p><a href="#rendez-vous" aria-label={`Réserver : ${service.title}, ${service.price}`}><span>{service.price}</span><FiArrowUpRight aria-hidden="true" /></a></article>)}</div></section>;
}
