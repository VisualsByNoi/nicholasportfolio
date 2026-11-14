/* Pad naar een bestand in /public, werkt op elke base-URL */
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
