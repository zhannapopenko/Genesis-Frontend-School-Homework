import axios from "../services/axios";

export function getTrendingFeed() {
  return axios.get("/trending/feed");
}
