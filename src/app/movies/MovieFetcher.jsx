import fetchMovies from "../lib/fetchMovies";
import Movies from "./Movies";

export default async function MovieFetcher() {
  const movies = await fetchMovies();
  console.log(movies)

  return <Movies initialMovies={movies} />;
}
