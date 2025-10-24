import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { ContactsContext } from "../context/ContactContext";
import AddContactModal from "./AddContactModal";

const HeroSection = () => {
  const {showFormModal,
    toggleFormModal,
    addContact,
  } = useContext(ContactsContext);
  return (
    <section className="mb-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          <Typewriter
            words={["Manage your contacts effortlessly"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={0}
          />
        </h1>

        <p className="mt-4 text-xl leading-8 text-text">
          All your connections, one simple place.
        </p>

        <div className="mt-8">
          <button
            type="button"
            className="relative group text-xl cursor-pointer inline-flex items-center gap-x-2 rounded-md bg-primary px-4 py-3 font-semibold text-white shadow-sm 
               hover:shadow-xl hover:shadow-accent/80
               transition-all duration-300
               animate-pulse-glow"
               onClick={toggleFormModal}
          >
            Add New Contact
            <AiOutlinePlus
              className=" opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold"
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
