import React, { useContext, useState } from "react";
import { ContactsContext } from "../context/ContactContext";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "./InputField";

const AddContactModal = () => {
  const { showFormModal, toggleFormModal, addContact } =
    useContext(ContactsContext);

  const [formData, setFormData] = useState({
    title: "Mr",
    first: "",
    last: "",
    email: "",
    cell: "",
    phone: "",
    streetName:"",
    streetNum:"",
    state:"",
    postcode:"",
    city: "",
    country: "",
    dob:"",
    age:"",
    avatar:"",
  });

  if (!showFormModal) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newContact = {
    name: {
      title: formData.title,
      first: formData.first,
      last: formData.last,
    },
    email: formData.email,
    cell: formData.cell,
    phone: formData.phone,
    location: {
      street: {
        number: formData.streetNum || 0,
        name: formData.streetName || "",
      },
      city: formData.city,
      state: formData.state || "",
      country: formData.country,
      postcode: formData.postcode || "",
    },
    dob: {
      date: formData.dob ? new Date(formData.dob).toISOString() : new Date().toISOString(),
      age: formData.dob ? new Date().getFullYear() - new Date(formData.dob).getFullYear() : 0,
    },
    picture: {
      medium: formData.avatar 
    },
  };

  addContact(newContact);
  toggleFormModal();
};


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-background p-6 rounded-2xl w-full max-w-3xl relative shadow-2xl border border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleFormModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-primary transition-colors"
        >
          <AiOutlineClose size={22} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Add New Contact
        </h2>

        <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary w-full"
            >
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </div>
          {/* Name Fields */}
          <InputField
            label="First Name"
            name="first"
            value={formData.first}
            onChange={handleChange}
            required
          />
          <InputField
            label="Last Name"
            name="last"
            value={formData.last}
            onChange={handleChange}
            required
          />
          {/* Contact Info */}
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Cell"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Location */}
          <InputField
            label="Street Number"
            name="streetNum"
            value={formData.streetNum}
            onChange={handleChange}
          />
          <InputField
            label="Street Name"
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
          />
          <InputField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <InputField
            label="Post Code"
            name="postCode"
            value={formData.postcode}
            onChange={handleChange}
          />
          <InputField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <InputField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <InputField
            label="Date of Birth"
            name="dob"
            value={formData.dob}
            type="date"
            onChange={handleChange}
            required
          />
          <InputField
            className="col-span-2"
            label="Avatar"
            name="avatar"
            value={formData.avatar}
            type="url"
            onChange={handleChange}
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-white col-span-3 px-4 py-2 rounded-lg hover:bg-primary/80 transition-all mt-2"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
