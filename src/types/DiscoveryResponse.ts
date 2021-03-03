import { DiscoveryMovie } from "./DiscoveryMovie";

export interface DiscoveryResponse {
  page: number;
  results: DiscoveryMovie[];
  total_pages: number;
  total_results: number;
}
