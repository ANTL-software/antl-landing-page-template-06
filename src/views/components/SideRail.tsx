import { FiArrowUpRight } from "react-icons/fi";
import type { Link } from "../../types";

type SideRailProps = { brand: string; navigation: Link[]; bookingHref: string };

export function SideRail({ brand, navigation, bookingHref }: SideRailProps) {
  return <header className="side-rail"><a className="side-rail__brand" href="#top">{brand}<span>®</span></a><nav aria-label="Navigation principale">{navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a className="side-rail__book" href={bookingHref}>Réserver <FiArrowUpRight aria-hidden="true" /></a></header>;
}
