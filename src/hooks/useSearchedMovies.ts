// https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&query=spider

import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { SearchMovie } from "../types/SearchMovie";
import { SearchResponse } from "../types/SearchResponse";

type Props = {
  query: string;
};

const searchMovies = async ({ query }: Props) => {
  const {
    data: { results },
  }: AxiosResponse<SearchResponse> = await axios.get(
    `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&query=${query}&api_key=9082968868ca2b288b02980f95711e52`
  );
  return results;
};

export default function useDiscoveryMovies({ query }: Props) {
  return useQuery<SearchMovie[], Error>("search-movies", () =>
    searchMovies({ query })
  );
}
