import { FiArrowUpRight } from "react-icons/fi";
import type { Link } from "../../types";

type SideRailProps = { brand: string; navigation: Link[]; bookingHref: string };

export function SideRail({ brand, navigation, bookingHref }: SideRailProps) {
  return <header className="studio-header"><a className="studio-header__brand" href="#top" aria-label={`${brand}, accueil`}><span className="brand-symbol" aria-hidden="true">//</span><span className="studio-header__name">{brand}<span className="brand-dot">.</span></span></a><nav aria-label="Navigation principale">{navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a className="studio-header__book" href={bookingHref}>On se voit ? <FiArrowUpRight aria-hidden="true" /></a></header>;
}
