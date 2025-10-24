import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { AiOutlinePlus } from "react-icons/ai";
import ContactCardSkeleton from "./ContactCardSkeleton";
import { ContactsContext } from "../context/ContactContext";
import AddContactModal from "./AddContactModal";
const ContactSection = () => {
  const {
    contacts,
    list,
    setList,
    loading,
    showFormModal,
    toggleFormModal,
    addContact,
  } = useContext(ContactsContext);
  const [searchTerm, setSearchTerm] = useState("");
  function handleContactList() {
    if (list == 10) setList(19);
    else setList(10);
  }
  const filteredContacts = contacts.filter((contact) =>
    `${contact.name.title} ${contact.name.first} ${contact.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-primary/50 -mt-15  p-16">
      <h1 className="text-3xl font-bold text-primary ">Your Contacts</h1>
      <p className="mt-2 mb-4">Search, view, and add new contacts easily.</p>
      <div className="flex items-center gap-2 w-full max-w-3xl mx-auto">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          className="bg-primary text-background p-3 rounded-full hover:bg-primary/80 cursor-pointer transition-colors"
          onClick={toggleFormModal}
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-8 animate-slide-up">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <ContactCardSkeleton key={i} />
          ))
        ) : filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <ContactCard user={contact} />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No contacts found.
          </p>
        )}

        {/* Buttons Section */}
        {!loading && (
          <div className="col-span-2 flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handleContactList}
              className="relative group text-lg cursor-pointer inline-flex items-center gap-x-2 rounded-full bg-primary px-6 py-3 text-background shadow-sm hover:shadow-xl hover:shadow-accent/80 transition-all duration-300 animate-pulse-glow"
            >
              {list === 10 ? "See more" : "See less"}
              {list === 10 ? (
                <FaChevronDown
                  className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold animate-pulse-glow"
                  size={16}
                />
              ) : (
                <FaChevronUp
                  className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold animate-pulse-glow"
                  size={16}
                />
              )}
            </button>

            <button
              className="relative group text-lg cursor-pointer inline-flex items-center gap-x-2 rounded-xl bg-background px-6 py-3 text-primary shadow-sm hover:shadow-xl hover:shadow-accent/80 transition-all duration-300 animate-pulse-glow"
              onClick={toggleFormModal}
            >
              Add new Contact
              <AiOutlinePlus
                className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold"
                size={24}
              />
            </button>
          </div>
        )}
      </div>
      {showFormModal && (
        <AddContactModal
          isOpen={showFormModal}
          onClose={toggleFormModal}
          onAddContact={addContact}
        />
      )}
    </section>
  );
};

export default ContactSection;
