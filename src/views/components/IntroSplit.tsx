import { FiArrowUpRight } from "react-icons/fi";
import heroImage from "../../assets/salon-hero.png";
import type { Link } from "../../types";

type IntroSplitProps = { bookingLink: Link; address: string };

export function IntroSplit({ bookingLink, address }: IntroSplitProps) {
  return <section className="salon-hero" id="top" aria-labelledby="hero-title"><img className="salon-hero__image" src={heroImage} alt="Une coupe en cours, dans la lumière naturelle du Studio Parallèle" fetchPriority="high" /><div className="salon-hero__content"><p className="eyebrow">Salon de coiffure · Rochefort</p><h1 id="hero-title">Votre style.<br /><span>En liberté.</span></h1><p className="salon-hero__description">Des coupes qui vivent.<br />Des couleurs qui vous ressemblent.</p><a className="round-link" href={bookingLink.href}><span>{bookingLink.label}</span><FiArrowUpRight aria-hidden="true" /></a></div><div className="salon-hero__caption"><span>Coiffure / Couleur / Soin</span><span>La matière, le geste, vous.</span></div><div className="salon-info"><p><span>Venez comme vous êtes.</span>{address}</p><p>Du mardi au samedi<span>Sur rendez-vous</span></p><span className="salon-info__mark" aria-hidden="true"><FiArrowUpRight /></span></div></section>;
}
