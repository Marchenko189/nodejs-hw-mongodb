import { Contact } from "../models/contactSchema.js";

export const getAllContacts = async () => {
    const contacts = await Contact.find();
    return contacts;
};

export const getContactById = async (contactId) => {
    const contact = await Contact.findById(contactId);
    return contact;
};

export const createContact = async (payload) => {
    const contact = await Contact.create(payload);
    return contact;
};

export const updateContact = async (contactId, payload) => {
    const rawResult = await Contact.findOneAndUpdate({_id: contactId}, payload, { new: true });
    return rawResult;
};

export const deleteContact = async (contactId) => {
    const contact = await Contact.findOneAndDelete({ _id: contactId });
    return contact;
};