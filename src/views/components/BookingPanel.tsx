import { BookingDemo } from "../../booking/react";
import type { SalonSite } from "../../types";

type BookingPanelProps = { booking: SalonSite["booking"] };

export function BookingPanel({ booking }: BookingPanelProps) {
  return <section className="booking-panel" id="rendez-vous"><div className="booking-panel__intro"><p className="section-kicker">Rendez-vous</p><h2>Bloquez votre moment, on s’occupe du reste.</h2><p>Choisissez un créneau pour une coupe. Pour une couleur ou une transformation, le diagnostic se fait ensemble au salon.</p></div><BookingDemo className="booking-panel__widget" title={booking.title} serviceId="coupe-signature" resourceId="fauteuil-01" timeZone="Europe/Paris" durationMinutes={60} storageKey="studio-parallele-demo" /></section>;
}
