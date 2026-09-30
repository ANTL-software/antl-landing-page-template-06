# antl — landing page template 06

Template React/Vite/TypeScript pour un salon de coiffure. Il adopte une direction éditoriale distincte : navigation latérale, composition en panneaux et carte de prestations, avec la réservation comme action centrale.

## Personnalisation

- `src/content/salon.ts` : marque, adresse, navigation, texte, prix et prestations.
- `src/styles/site.css` : palette et règles de mise en page propres à ce template.
- `src/assets/salon-hero.png` : visuel principal.
- `src/views/components/` : sections indépendantes, réorganisables dans `src/views/layouts/SalonPage.tsx`.

## Réservation

`src/booking/` est une exportation client-owned de `antl-site-booking`. Le template présente `BookingDemo`, une démo locale avec créneaux et contrôle des doublons dans le navigateur. Pour une livraison client, remplacez-la par Cal.com/Calendly (`BookingProviderEmbed`) ou une API dynamique ; consultez `BOOKING_SETUP.md`.

## Commandes

```bash
npm install
npm run dev
npm run build
```
