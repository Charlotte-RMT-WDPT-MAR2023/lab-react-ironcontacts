import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";
import trophyImage from "./trophy.jpg";

function App() {
  const fiveContacts = contactsData.slice(0, 5);
  const [contacts, updateContacts] = useState(fiveContacts);

  const addContact = () => {
    let newContacts = contactsData.slice(5);
    let randomIndex = Math.floor(Math.random() * newContacts.length);
    const newContact = newContacts[randomIndex];
    const updatedContacts = [...contacts, newContact];
    updateContacts(updatedContacts);
  };

  const sortPopularity = () => {
    const currentContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    updateContacts(currentContacts);
  };

  const sortName = () => {
    const currentContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    updateContacts(currentContacts);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    updateContacts(filteredContacts);
  };

  return (
    <div className="App">
      <div className="buttonContainer">
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
        <button onClick={sortName}>Sort by Name</button>
      </div>
      <div className="tableContainer">
        <table className="contactTable">
          <thead>
            <tr>
              <th className="tableHeaders">Picture</th>
              <th className="tableHeaders">Name</th>
              <th className="tableHeaders">Popularity</th>
              <th className="tableHeaders">Won an Oscar</th>
              <th className="tableHeaders">Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="contact" width={100} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    {contact.wonOscar && (
                      <img src={trophyImage} alt="Trophy" width={100} />
                    )}
                  </td>
                  <td>
                    {contact.wonEmmy && (
                      <img src={trophyImage} alt="Trophy" width={100} />
                    )}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="btn-delete"
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
