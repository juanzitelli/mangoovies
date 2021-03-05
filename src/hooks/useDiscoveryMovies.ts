import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { DiscoveryResponse } from "../types/DiscoveryResponse";
import { DiscoveryMovie } from "../types/DiscoveryMovie";

const getDiscoveryMovies = async () => {
  const {
    data: { results },
  }: AxiosResponse<DiscoveryResponse> = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=9082968868ca2b288b02980f95711e52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  );
  return results;
};

export default function useDiscoveryMovies() {
  return useQuery<DiscoveryMovie[], Error>(
    "discover-movies",
    getDiscoveryMovies
  );
}
