import { API_URL } from "../api/api";

const sessionId = localStorage.getItem("sessionId");

export async function getCarrito() {
  const res = await fetch(`${API_URL}/carritos/${sessionId}`, {
    headers: {
      "x-session-id": sessionId,
    },
  });

  if (!res.ok) return { items: [] };
  return await res.json();
}

export async function addItem(item) {
  const res = await fetch(`${API_URL}/carritos/${sessionId}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-session-id": sessionId,
    },
    body: JSON.stringify(item),
  });

  return await res.json();
}

export async function removeItem(id_item) {
  const res = await fetch(`${API_URL}/carritos/${sessionId}/items/${id_item}`, {
    method: "DELETE",
    headers: {
      "x-session-id": sessionId,
    },
  });

  return await res.json();
}
