const API_URL = `http://localhost:8080`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGU2ZmMxZTYyZDQxYjZhYWExODU4YyIsImlhdCI6MTY5MjMwMjY2OH0.htz3GGWaPa4-aGOTBgIRkLuU8PG-nM4UNwnawYnWBbg";

export default (goal) => {
  return fetch(`${API_URL}/goals/${goal._id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goal: goal.goal,
      description: goal.description,
      type: goal.type,
      attribute: goal.attribute,
      status: goal.status
    })
  }).then((res) => res.json());
};
