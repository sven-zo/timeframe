const { REACT_APP_API_URL } = process.env;

export default async function fetchPackage(id) {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/deliveries/6/packages/${id}`);
    const parcel = await response.json();
    return parcel;
  } catch (error) {
    return new Error('fetch failed');
  }
}
