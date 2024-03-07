import { useQuery } from "@tanstack/react-query";
import ms from "ms"
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms")
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatform() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
}
