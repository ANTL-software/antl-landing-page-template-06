import type { SalonSite } from "../../types";

export function SiteFooter({ brand, address }: Pick<SalonSite, "brand" | "address">) {
  return <footer><strong>{brand}</strong><p>{address}<br />05 46 00 00 00</p><p>Instagram · @studioparallele<br />© 2026</p></footer>;
}
