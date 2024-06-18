import Producto from "../models/Producto.model.js";

export const obtenerTodosLosProductos = async () => {
  try {
    const productos = await Producto.find()
      .populate("unidadDeMedida")
      .populate("categorias");
    return productos;
  } catch (error) {
    return { message: error.message };
  }
};
