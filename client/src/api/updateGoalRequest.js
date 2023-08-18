const API_URL = `http://localhost:8080`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGU2ZmMxZTYyZDQxYjZhYWExODU4YyIsImlhdCI6MTY5MjMwMjY2OH0.htz3GGWaPa4-aGOTBgIRkLuU8PG-nM4UNwnawYnWBbg";

export default () => {
  return fetch(`${API_URL}/goals/${goal._id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
