import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWNhYzJlODljMTJkNTZlZDcxNWQ5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODgwNjk2MCwiZXhwIjoxNjc4ODEwNTYwfQ.jxRGOso635hGvBsEHkQG7sZcVI1ScihpAF0_bTeNUS4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
