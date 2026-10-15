import { FiArrowUpRight } from "react-icons/fi";
import type { SalonSite } from "../../types";

export function SiteFooter({ brand, address }: Pick<SalonSite, "brand" | "address">) {
  return <footer className="salon-footer"><a href="#top" className="salon-footer__brand">{brand}<FiArrowUpRight aria-hidden="true" /></a><p>{address}<br />Du mardi au samedi · sur rendez-vous</p><p>Site de démonstration ANTL<br />© 2026 · Studio Parallèle</p></footer>;
}
