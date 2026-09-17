import { Router } from "express";
import Productos from "../models/Productos";
import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProductos } from "../controllers/productoController";
import { createCliente, deleteCliente, renderClientes, renderEditCliente, statusCliente, updateCliente } from "../controllers/clienteController";

const router = Router();

router.get("/",renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/update", renderEditProducto);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status", statusProductos);

//clientes

router.post("/clientes/agregar", createCliente);

router.get("/clientes/:id/update", renderEditCliente);

router.post("/clientes/:id/update", updateCliente);


router.get("/clientes/:id/delete", deleteCliente);

router.get(
    "/clientes/:id/status", statusCliente);



export default router; 