import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "304ddeb652ec47259815f6fe23d9183d"
  }
})