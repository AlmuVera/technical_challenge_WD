import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

export function getPhones() {
  return http.get("/phones");
}

export function getPhoneDetail(id) {
  return http.get(`/phones/${id}`);
}
