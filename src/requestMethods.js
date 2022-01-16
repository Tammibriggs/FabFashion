import axios from 'axios'

const BASE_URL = 'http://localhost:8800/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGZkZDE3YmU1N2M4MjJhNjcyOTkwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM0MTAxMywiZXhwIjoxNjQyNjAwMjEzfQ.IWNEcgWK9U60ovUSrAFmLKxDyBkuII9MDBPaDVvHcZw'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token:`Bearer ${TOKEN}`}
})
