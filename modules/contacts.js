import arrContacts from "./db.js";

let contact = {
  getAllContacts: function () {
    return arrContacts;
  },
  getContact: function (contactId) {
    return arrContacts[contactId];
  },
  addContact: function (newContact, insertDom) {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contact");
    contact.innerHTML = `
    <h2>${newContact.name}</h2>
    <p>${newContact.phone}</p>
    <p>${newContact.email}</p>
    `;
    insertDom.appendChild(contact);
    const contactNew = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
    };
    arrContacts.arrContacts.push(contactNew);
  },
};

export default contact;
