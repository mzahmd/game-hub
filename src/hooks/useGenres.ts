import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genre";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiCLient = new APIClient<Genre>("/genres");

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiCLient.getAll,
    staleTime: ms("24"),
    initialData: genres,
  });
}
