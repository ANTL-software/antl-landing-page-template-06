import { FiArrowDownRight } from "react-icons/fi";
import { BookingDemo } from "../../booking/react";
import type { SalonSite } from "../../types";

type BookingPanelProps = { booking: SalonSite["booking"] };

export function BookingPanel({ booking }: BookingPanelProps) {
  return <section className="booking-panel" id="rendez-vous" aria-labelledby="booking-title"><div className="booking-panel__intro"><p className="eyebrow">03 / Votre prochain rendez-vous</p><h2 id="booking-title">Et si on<br />se <span>voyait ?</span></h2><p>Choisissez un créneau pour une coupe. Pour une couleur ou une transformation, le diagnostic se fait ensemble au salon.</p><FiArrowDownRight className="booking-panel__arrow" aria-hidden="true" /><p className="booking-panel__demo">Pour essayer : cette réservation est une démo, aucun rendez-vous réel n’est pris.</p></div><BookingDemo className="booking-panel__widget" title={booking.title} serviceId="coupe-signature" resourceId="fauteuil-01" timeZone="Europe/Paris" durationMinutes={60} storageKey="studio-parallele-demo" /></section>;
}
