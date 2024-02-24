import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "c7b18323a47d40c394ea5b019646b1f5"
    key: "520aa063c7634394b36ea9d46f072c61"
  }
})