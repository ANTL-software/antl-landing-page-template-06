import { FiArrowDownRight } from "react-icons/fi";
import heroImage from "../../assets/salon-hero.png";
import type { Link } from "../../types";

type IntroSplitProps = { bookingLink: Link; address: string };

export function IntroSplit({ bookingLink, address }: IntroSplitProps) {
  return <section className="intro-split" id="top"><div className="intro-split__copy"><p className="intro-split__eyebrow">Coiffure · couleur · soin</p><h1>Votre tête mérite mieux qu’une routine.</h1><div className="intro-split__meta"><p>{address}<br />Mar. — Sam. · sur rendez-vous</p><a className="intro-split__action" href={bookingLink.href}>{bookingLink.label}<FiArrowDownRight aria-hidden="true" /></a></div></div><figure className="intro-split__image"><img src={heroImage} alt="Coiffeuse réalisant une coupe dans un salon contemporain" /><figcaption>Studio Parallèle · 2026</figcaption></figure></section>;
}
