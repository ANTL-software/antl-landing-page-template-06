import { salonSite } from "../../content/salon";
import { BookingPanel, IntroSplit, ServicesRail, SideRail, SiteFooter, StudioStatement } from "../components";

export function SalonPage() {
  const { booking, brand, navigation, address, services } = salonSite;
  return <><SideRail brand={brand} navigation={navigation} bookingHref="#rendez-vous" /><main><IntroSplit address={address} bookingLink={{ label: booking.label, href: "#rendez-vous" }} /><ServicesRail services={services} /><StudioStatement /><BookingPanel booking={booking} /></main><SiteFooter brand={brand} address={address} /></>;
}
