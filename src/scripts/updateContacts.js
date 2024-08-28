import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

// export const updateContacts = contacts => fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

export const updateContacts = async (contacts) => {
    console.log("Contacts to be saved:", contacts); // Додайте цей рядок для виведення контактів у консоль
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};
