const { Contact } = require("../services/contactService");

const { ctrlWrapper, throwNotFoundError } = require("../helpers");

const getAll = ctrlWrapper(async (req, res) => {
  const result = await Contact.find();
  res.json(result);
});

const getOneContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  throwNotFoundError(result);
  res.json(result);
});

const addContact = ctrlWrapper(async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
});

const deleteContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  throwNotFoundError(result);
  res.json(result);
});

const updateContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  throwNotFoundError(result);
  res.json(result);
});

const updateFavorite = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  throwNotFoundError(result);
  res.json(result);
});

module.exports = {
  getAll,
  addContact,
  getOneContact,
  deleteContact,
  updateContact,
  updateFavorite,
};
