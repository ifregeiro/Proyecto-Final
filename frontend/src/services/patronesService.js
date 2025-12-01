import { API_URL } from "../api/api";

// Obtener todos los patrones
export async function getPatrones() {
  try {
    const res = await fetch(`${API_URL}/patrones`);
    if (!res.ok) throw new Error("Error al obtener patrones");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Obtener un patrón por ID
export async function getPatronById(id) {
  try {
    const res = await fetch(`${API_URL}/patrones/${id}`);
    return await res.json();
  } catch {
    return null;
  }
}

// ⭐ NUEVO: obtener varios patrones por ID
export async function getPatronesByIds(ids = []) {
  try {
    const resultados = [];

    for (const id of ids) {
      const res = await fetch(`${API_URL}/patrones/${id}`);
      if (res.ok) {
        const data = await res.json();
        resultados.push(data);
      }
    }

    return resultados;
  } catch (error) {
    console.error("Error obteniendo patrones por ID:", error);
    return [];
  }
}
