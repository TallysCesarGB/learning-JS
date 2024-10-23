import contacts from "./contacts.js";

const save = document.querySelector("#save");
const contactList = document.querySelector("#contatList");

save.addEventListener("click", (evt) => {
  const contact = {
    name: document.querySelector("#name").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };
  contacts.addContact(contact, contactList);
  console.log(contacts.getAllContacts());
});
