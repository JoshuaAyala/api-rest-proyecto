const express = require("express");
const userSchema = require("../models/user");
const sucursalEsquema = require("../models/sucursal");
const productoEsquema = require("../models/productos");
const rolEsquema = require("../models/rol");
const payEsquema = require("../models/payments");
const ventasEsquema = require("../models/ventas");

const router = express.Router();

// USUARIO

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, email, contraseña, rol, sucursal } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nombre, email, contraseña, rol, sucursal } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// ROLES

// list
router.get("/roles", (req, res) => {
  rolEsquema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// create  no lo pidio pero XD

router.post("/roles", (req, res) => {
  const rol = rolEsquema(req.body);
  rol
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// METODOS DE PAGO

// Listar pago
router.get("/payment", (req, res) => {
  payEsquema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.post("/payment", (req, res) => {
  const pay = payEsquema(req.body);
  pay
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar pago
router.put("/payment/:id", (req, res) => {
const { id } = req.params;
const { nombre, codigo } = req.body;
payEsquema
  .updateOne({ _id: id }, { $set: { nombre, codigo } })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// delete pago
router.delete("/payment/:id", (req, res) => {
  const { id } = req.params;
  payEsquema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// SUCURSAL

// Crear Sucursal
router.post("/sucursal", (req, res) => {
  const sucursal = sucursalEsquema(req.body);
  sucursal
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Listar sucursales
router.get("/sucursal", (req, res) => {
    sucursalEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar Sucursal
router.put("/sucursal/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, codigo, telefono, direccion, status } = req.body;
  sucursalEsquema
    .updateOne({ _id: id }, { $set: { nombre, codigo, telefono, direccion, status } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// PRODUCTOS


// Crear producto
router.post("/productos", (req, res) => {
  const producto = productoEsquema(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get("/productos", (req, res) => {
  productoEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, sku, stock, sucursal, precio, status } = req.body;
  productoEsquema
    .updateOne({ _id: id }, { $set: { nombre, sku, stock, sucursal, precio, status } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Borrar producto
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoEsquema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// VENTAS

// crear venta
router.post("/venta", (req, res) => {
  const venta = ventasEsquema(req.body);
  venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Listar ventas
router.get("/venta", (req, res) => {
  ventasEsquema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Borrar producto
router.get("/venta/:id", (req, res) => {
  const { id } = req.params;
  ventasEsquema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
