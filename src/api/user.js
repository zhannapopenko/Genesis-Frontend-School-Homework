import axios from "../services/axios";

export function getUserInfo(username) {
  return axios.get(`/user/info/${username}`);
}

export function getUserFeed() {
  return axios.get("/trending/feed");
}
