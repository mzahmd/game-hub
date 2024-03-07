import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genre";
import APIClient from "../services/api-client";

const apiCLient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiCLient.getAll,
    staleTime: ms("24"),
    initialData: genres,
  });
}
