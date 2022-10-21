import axios from "axios";
const customFetch = axios.create({
  baseURL: "http://139.59.103.50:5000",
  headers: { "Content-Type": "application/json" },
});

export default customFetch;
