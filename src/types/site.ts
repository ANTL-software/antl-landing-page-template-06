export type Link = { label: string; href: string };

export type Service = { number: string; title: string; duration: string; price: string; detail: string };

export type SalonSite = {
  brand: string;
  address: string;
  booking: { title: string; bookingUrl: string; label: string; note: string };
  services: Service[];
  navigation: Link[];
};
