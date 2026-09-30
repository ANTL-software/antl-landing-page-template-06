import { useEffect, useState } from "react";
import { NotFoundPage } from "./views/layouts/NotFoundPage";
import { SalonPage } from "./views/layouts/SalonPage";

const knownHashes = new Set(["", "#top", "#prestations", "#studio", "#rendez-vous"]);

function isKnownPath() { return knownHashes.has(window.location.hash); }

export function App() {
  const [knownPath, setKnownPath] = useState(isKnownPath);
  useEffect(() => { const update = () => setKnownPath(isKnownPath()); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  return knownPath ? <SalonPage /> : <NotFoundPage />;
}
