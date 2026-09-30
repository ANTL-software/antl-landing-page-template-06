import type { Service } from "../../types";

type ServicesRailProps = { services: Service[] };

export function ServicesRail({ services }: ServicesRailProps) {
  return <section className="services-rail" id="prestations"><div className="services-rail__lead"><p className="section-kicker">La carte</p><h2>Du temps pour regarder, puis bien faire.</h2><p>Chaque prestation commence par un vrai diagnostic : texture, habitudes, envies et entretien au quotidien.</p></div><div className="services-rail__list">{services.map((service) => <article key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.detail}</p></div><p>{service.duration}<strong>{service.price}</strong></p></article>)}</div></section>;
}
