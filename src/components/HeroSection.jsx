import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { ContactsContext } from "../context/ContactContext";
import AddContactModal from "./AddContactModal";

const HeroSection = () => {
  const { showFormModal, toggleFormModal, addContact } =
    useContext(ContactsContext);

  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text">
          <Typewriter
            words={["Manage your contacts effortlessly"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={0}
          />
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-text">
          All your connections, one simple place.
        </p>

        <div className="mt-6 sm:mt-8">
          <button
            type="button"
            onClick={toggleFormModal}
            className="relative group inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:shadow-xl hover:shadow-accent/80 transition-all duration-300 animate-pulse-glow"
          >
            Add New Contact
            <AiOutlinePlus
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              size={24}
            />
          </button>
        </div>
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

export default HeroSection;
