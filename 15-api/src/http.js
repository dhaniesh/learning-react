export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const result = await response.json();
    if (!response.ok) {
        throw new Error("failed to fetch places");
    }
    return result.places;
}

export async function updateUserSelectedPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': "application/json"
        }
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error("failed to update user selected place")
    }
    return response.message;
}
