const { API_URL } = process.env;

export default async function fetchPackage(id) {
  try {
    const response = await fetch(API_URL);
    const parcel = await response.json();
    return parcel;
  } catch (error) {
    return new Error('fetch failed');
  }
}
