# antl — landing page template 06

Template React/Vite/TypeScript pour un salon de coiffure. Direction studio créatif : photographie en pleine largeur, typographie sans empattement de grand format, palette abricot et anthracite, carte en trois colonnes et réservation sur fond sombre. Mise en page responsive avec navigation compacte sur mobile.

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
