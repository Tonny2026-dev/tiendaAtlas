import Clientes from "../models/Clientes";

export const renderClientes = async (req, res) => {
  const clientes = await Clientes.find().lean();
  res.render("index", { clientes: clientes });

};

export const createCliente = async (req, res) => {
  try {
    const clientes = Clientes(req.body);
    await clientes.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }

};

export const renderEditCliente = async (req, res) => {
  try {
    const clientes = await Clientes.findById(req.params.id).lean();
    res.render("editarCliente", {clientes});
  } catch (error) {
    console.log(error.message);
  }

};

export const updateCliente = async (req, res) => {
  const { id } = req.params;
  await Clientes.findByIdAndUpdate(id, req.body);
  res.redirect("/");

};

export const deleteCliente = async (req, res) => {
  const { id } = req.params;
  await Clientes.findByIdAndDelete(id);
  res.redirect("/");

};

export const statusCliente = async (req, res) => {
  const { id } = req.params;
  const clientes = await Clientes.findById(id);

  // Mando a llamar opcion
  clientes.estado = !clientes.estado;
  await clientes.save();
  res.redirect("/");

};