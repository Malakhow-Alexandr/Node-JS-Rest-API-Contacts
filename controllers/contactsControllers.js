const { Contact } = require("../models/contactModel");

const { ctrlWrapper, throwNotFoundError } = require("../helpers");

const getContacts = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;

  const skip = (page - 1) * limit;

  const filter = { owner };
  if (favorite === "true") {
    filter.favorite = true;
  }
  if (favorite === "false") {
    filter.favorite = false;
  }

  const result = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");

  res.json(result);
});

const getContact = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  throwNotFoundError(result);
  res.json(result);
});

const addContact = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
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
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
  updateFavorite,
};
