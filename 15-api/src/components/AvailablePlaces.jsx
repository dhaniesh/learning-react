import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const result = await response.json();
      setAvailablePlaces(result.places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
