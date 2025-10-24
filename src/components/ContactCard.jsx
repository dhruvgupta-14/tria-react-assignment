import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

const ContactCard = (props) => {
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
    <div className="bg-background px-6 py-4 rounded-2xl flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-xl hover:shadow-accent/80 duration-300">
      <div className="flex gap-4">
        <img
          src={props.user.picture.medium}
          alt={`${props.user.name.first} ${props.user.name.last}`}
          className="rounded-full w-20 h-20 object-cover border-2 border-primary"
        />

        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-primary">
            {props.user.name.title} {props.user.name.first}{" "}
            {props.user.name.last}
          </h2>
          <p className="text-sm text-gray-500">Cell: {props.user.cell}</p>
          <p className="text-sm text-gray-500">Phone: {props.user.phone}</p>
        </div>
      </div>

      <button
        className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
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
            <div className="relative bg-background rounded-2xl p-6 w-full max-w-lg shadow-2xl transition-all duration-300">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-primary transition-colors"
              >
                <AiOutlineClose size={22} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={props.user.picture.large}
                  alt={props.user.name.first}
                  className="rounded-full w-24 h-24 object-cover border-2 border-primary"
                />
                <div>
                  <h2 className="text-xl font-bold text-primary">
                    {props.user.name.title} {props.user.name.first}{" "}
                    {props.user.name.last}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {props.user.location.city}, {props.user.location.country}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium text-primary">Email:</span>{" "}
                  {props.user.email}
                </p>
                <p>
                  <span className="font-medium text-primary">Date of Birth:</span>{" "}
                  {new Date(props.user.dob.date).toLocaleDateString()} (
                  {props.user.dob.age} years)
                </p>
                <p>
                  <span className="font-medium text-primary">Contact:</span>{" "}
                  {props.user.cell} | {props.user.phone}
                </p>
                <p>
                  <span className="font-medium text-primary">Address:</span>{" "}
                  {props.user.location.street.number}{" "}
                  {props.user.location.street.name}, {props.user.location.state},{" "}
                  {props.user.location.country}, {props.user.location.postcode}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleClose}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/80 transition-all duration-300"
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
