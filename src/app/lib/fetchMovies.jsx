
import axios from "axios";

export default async function fetchMovies() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "32e2256d77263eb3dc613bfabcba82d8";
  const videoUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  
  const { data } = await axios.get(videoUrl);
  return data.results; 
}
