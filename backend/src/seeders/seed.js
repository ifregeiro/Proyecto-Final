import sequelize from "../database/database.js";

// Import models
import "../models/index.js";

import seedUsuarios from "./seed_usuarios.js";
import seedColecciones from "./seed_colecciones.js";
import seedAmigurumis from "./seed_amigurumis.js";
import seedPatrones from "./seed_patrones.js";
import seedImagenes from "./seed_imagenes.js";
import seedCarritos from "./seed_carritos.js";

const seed = async () => {
  try {
    console.log("🔄 Reiniciando base de datos...");
    await sequelize.sync({ force: true });

    console.log("🌱 Insertando USUARIOS...");
    await seedUsuarios();

    console.log("🌱 Insertando COLECCIONES...");
    await seedColecciones();

    console.log("🌱 Insertando AMIGURUMIS...");
    await seedAmigurumis();

    console.log("🌱 Insertando PATRONES...");
    await seedPatrones();

    console.log("🌱 Insertando IMÁGENES...");
    await seedImagenes();

    console.log("🛒 Configurando CARRITOS...");
    await seedCarritos();

    console.log("✅ Base de datos inicializada correctamente.");
    process.exit();
  } catch (error) {
    console.error("❌ Error ejecutando seeds:", error);
    process.exit(1);
  }
};

seed();
