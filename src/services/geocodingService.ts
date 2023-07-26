import axios from "axios";

const GEOCODING_API_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress";

export async function getCoordinatesFromAddress(
  address: string
): Promise<{ latitude: number; longitude: number }> {
  try {
    const response = await axios.get(
      `${GEOCODING_API_URL}?address=${encodeURIComponent(
        address
      )}&benchmark=2020&format=json`,
      {
        headers: undefined,
      }
    );
    const data = response.data;
    // Extract latitude and longitude from the API response
    const latitude = data.result?.addressMatches?.[0]?.coordinates?.y || 0;
    const longitude = data.result?.addressMatches?.[0]?.coordinates?.x || 0;
    return { latitude, longitude };
  } catch (error) {
    throw new Error("Failed to fetch geocoding data.");
  }
}
