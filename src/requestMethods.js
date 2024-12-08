import axios from "axios";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_BASE_URL}/api/`;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGZkZDE3YmU1N2M4MjJhNjcyOTkwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM0MTAxMywiZXhwIjoxNjQyNjAwMjEzfQ.IWNEcgWK9U60ovUSrAFmLKxDyBkuII9MDBPaDVvHcZw";

export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

export const userRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
