import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";

export default async function seedUsuarios() {
  await Usuario.bulkCreate([
    {
      nombre: "Ignacio",
      apellido: "Fregeiro",
      email: "admin@illumia.com",
      contrasenia: await bcrypt.hash("admin123", 10),
      rol: "admin",
      ciudad: "Bahía Blanca",
    },
    {
      nombre: "Lucia",
      apellido: "Sola",
      email: "lucia@illumia.com",
      contrasenia: await bcrypt.hash("123456", 10),
      rol: "cliente",
      ciudad: "Bahía Blanca",
    },
    {
      nombre: "Cliente",
      apellido: "Demo",
      email: "demo@illumia.com",
      contrasenia: await bcrypt.hash("demo123", 10),
      rol: "cliente",
    },
  ]);
}
