import arrContacts from "./db.js";

let contact = {
  getAllContacts: function () {
    return arrContacts;
  },
  getContact: function (contactId) {
    return arrContacts[contactId];
  },
  addContact: function (newContact, insertDom) {
    const contactNew = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
    };
    arrContacts.arrContacts.push(contactNew);

    insertDom.innerHTML = "";

    arrContacts.arrContacts.map((c) => {
      const contact = document.createElement("div");
      contact.setAttribute("class", "contact");
      contact.innerHTML = `
      <h2>${c.name}</h2>
      <p>${c.phone}</p>
      <p>${c.email}</p>
      `;
      insertDom.appendChild(contact);
    });
  },
};

export default contact;
