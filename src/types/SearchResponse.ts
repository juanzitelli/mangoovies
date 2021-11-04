import { SearchMovie } from './SearchMovie';

export interface SearchResponse {
  page: number;
  results: SearchMovie[];
  total_pages: number;
  total_results: number;
}
