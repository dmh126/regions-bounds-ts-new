interface Region {
  name: string;
  shortCode: string;
  bounds: string;
}
export declare function findRegion(country: string, region: string): Region;