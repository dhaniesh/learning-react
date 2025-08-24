export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const result = await response.json();
    if (!response.ok) {
        throw new Error("failed to fetch places");
    }
    return result.places;
}