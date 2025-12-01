import { API_URL } from "../api/api";

export async function getPeluches() {
  try {
    const res = await fetch(`${API_URL}/amigurumis`);
    return await res.json();
  } catch (error) {
    console.error("Error obteniendo peluches:", error);
    return [];
  }
}

export async function getAmigurumiById(id) {
  try {
    const res = await fetch(`${API_URL}/amigurumis/${id}`);
    return await res.json();
  } catch {
    return null;
  }
}

export async function getAmigurumisByIds(ids = []) {
  try {
    const resultados = [];

    for (const id of ids) {
      const res = await fetch(`${API_URL}/amigurumis/${id}`);
      if (res.ok) {
        const data = await res.json();
        resultados.push(data);
      }
    }

    return resultados;
  } catch (error) {
    console.error("Error obteniendo amigurumis por ID:", error);
    return [];
  }
}


