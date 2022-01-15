import axios from 'axios'

const BASE_URL = 'http://localhost:8800/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGZkZDE3YmU1N2M4MjJhNjcyOTkwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjI3NTI0NSwiZXhwIjoxNjQyNTM0NDQ1fQ.SU9NGI7DAxagpz_VqMDf0CCcC2f3lLQV-kYrpfLiSsM'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token: `Bearer ${TOKEN}`}
})
