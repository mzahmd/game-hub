import usePlatform from "./usePlatform"

export default function usePlatforms(id?: number) {
  const { data: platforms } = usePlatform()
  return platforms?.results.find(p => p.id === id)
}