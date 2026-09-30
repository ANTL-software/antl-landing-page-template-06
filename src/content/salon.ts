import type { SalonSite } from "../types";

export const salonSite: SalonSite = {
  brand: "Studio Parallèle",
  address: "24 rue des Carmes · Rochefort",
  booking: { title: "Prendre rendez-vous", bookingUrl: "", label: "Choisir un créneau", note: "Démo locale : branchez Cal.com, Calendly ou l’API de réservation avant livraison." },
  navigation: [{ label: "Prestations", href: "#prestations" }, { label: "L’approche", href: "#studio" }, { label: "Rendez-vous", href: "#rendez-vous" }],
  services: [
    { number: "01", title: "Coupe signature", duration: "45 min", price: "à partir de 48 €", detail: "Diagnostic, coupe et coiffage." },
    { number: "02", title: "Couleur sur mesure", duration: "1h45", price: "à partir de 95 €", detail: "Éclaircissement, gloss ou couleur pleine." },
    { number: "03", title: "Brushing & soin", duration: "30 min", price: "à partir de 32 €", detail: "Un fini net, avec le soin adapté à votre cheveu." }
  ]
};
