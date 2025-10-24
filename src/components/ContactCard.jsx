import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

const ContactCard = ({ user }) => {
  const [isSeeMore, setSeeMore] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = isSeeMore ? "hidden" : "auto";
  }, [isSeeMore]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setSeeMore(false);
    }, 300);
  };

  return (
    <div className="bg-background px-4 py-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-xl hover:shadow-accent/80 duration-300">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-center sm:items-start">
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-primary"
        />

        <div className="flex-1 flex flex-col gap-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm text-gray-500">Cell: {user.cell}</p>
          <p className="text-sm text-gray-500">Phone: {user.phone}</p>
        </div>
      </div>

      <button
        className="bg-primary text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
        onClick={() => setSeeMore(true)}
      >
        See More
      </button>

      {mounted && isSeeMore &&
        ReactDOM.createPortal(
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 
            ${isClosing ? "animate-fadeOut" : "animate-fadeIn"}`}
          >
            <div className="relative bg-background rounded-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg shadow-2xl transition-all duration-300 overflow-auto max-h-[90vh]">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-primary transition-colors cursor-pointer"
              >
                <AiOutlineClose size={22} />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                <img
                  src={user.picture.medium}
                  alt={user.name.first}
                  className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-primary"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-bold text-primary">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {user.location.city}, {user.location.country}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm sm:text-base text-gray-700">
                <p>
                  <span className="font-medium text-primary">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-medium text-primary">Date of Birth:</span>{" "}
                  {new Date(user.dob.date).toLocaleDateString()} ({user.dob.age} years)
                </p>
                <p>
                  <span className="font-medium text-primary">Contact:</span> {user.cell} | {user.phone}
                </p>
                <p>
                  <span className="font-medium text-primary">Address:</span>{" "}
                  {user.location.street.number} {user.location.street.name},{" "}
                  {user.location.state}, {user.location.country}, {user.location.postcode}
                </p>
              </div>

              <div className="mt-6 flex justify-center sm:justify-end">
                <button
                  onClick={handleClose}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-primary/80 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default ContactCard;
