import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import APIClient from "../services/api-client";

const apiCLient = new APIClient<Genre>("/genres")

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
}
