export const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR:", err);

  // Código de estado por defecto
  const status = err.status || 500;

  // Mensaje seguro al usuario
  const message =
    err.message || "Ocurrió un error en el servidor. Inténtalo nuevamente.";

  res.status(status).json({
    ok: false,
    error: message,
  });
};
