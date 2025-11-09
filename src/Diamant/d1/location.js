import { useState } from "react";

const BAR_ADDRESS = "CAFÉ BAR LE DIAMANT ATTASSI-DROM, FJFR+H68, Agbokou Avakpa, Porto-Novo"; // CHANGE THIS

export default function LocateButton() {
  const [loading, setLoading] = useState(false);

  const openMaps = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      fallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const origin = `${latitude},${longitude}`;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent(
          BAR_ADDRESS
        )}&travelmode=driving`;
        window.open(url, "_blank");
        setLoading(false);
      },
      () => {
        fallback();
      },
      { timeout: 10000 }
    );
  };

  const fallback = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      BAR_ADDRESS
    )}`;
    window.open(url, "_blank");
    setLoading(false);
  };

  return (
    <button onClick={openMaps} disabled={loading}>
      {loading ? "Getting location…" : "Locate Us"}
    </button>
  );
}