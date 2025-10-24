import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [list, setList] = useState(10);
  const [showFormModal, setShowFormModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showFormModal ? "hidden" : "auto";
  }, [showFormModal]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const manualContacts = JSON.parse(
          localStorage.getItem("manualContacts") || "[]"
        );
        const response = await axios.get(
          `https://randomuser.me/api/?results=${list}&exc=id,login,nat&seed=myseed`
        );
        setContacts([...manualContacts, ...response.data.results]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [list]);

  const addContact = (newContact) => {
    const updatedManualContacts = [
      newContact,
      ...JSON.parse(localStorage.getItem("manualContacts") || "[]"),
    ];

    // Save only manually added contacts
    localStorage.setItem(
      "manualContacts",
      JSON.stringify(updatedManualContacts)
    );

    // Merge with API contacts to update state
    setContacts([newContact, ...contacts]);
  };

  const toggleFormModal = () => setShowFormModal(!showFormModal);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        addContact,
        list,
        setList,
        showFormModal,
        toggleFormModal,
        loading,
        setLoading,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
