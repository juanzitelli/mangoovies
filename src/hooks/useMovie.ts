import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { SingleMovie } from "../types/SingleMovie";

type Props = {
  movieId: string;
};

const getMovie = async (props: Props) => {
  const { data }: AxiosResponse<SingleMovie> = await axios.get(
    `https://api.themoviedb.org/3/movie/${props.movieId}?&language=en-US&api_key=9082968868ca2b288b02980f95711e52`
  );

  return data;
};

export default function useMovie(props: Props) {
  return useQuery<SingleMovie, Error>("get-single-movie", () =>
    getMovie({ movieId: props.movieId })
  );
}
