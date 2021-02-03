interface Region {
  name: string;
  shortCode: string;
  bounds: string;
}
export declare function findByCoordinates(country: string, lon: number, lat: number): Region[];