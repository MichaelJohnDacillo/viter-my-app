import React from "react";
import { useState } from "react";
import ModalAddHeader from "./ModalAddHeader";
import { apiVersion } from "../../../../helpers/function-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { HiPencil } from "react-icons/hi";
import ModalAddServices from "../services/ModalAddServices";
import ModalAddTestimonials from "../testimonials/ModalAddTestimonials";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalHeader, setIsModalHeader] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isModalHome, setIsModalHome] = React.useState(false);
  const [isModalAbout, setIsModalAbout] = React.useState(false);
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [isModalContact, setIsModalContact] = React.useState(false);
  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/header/header.php`,
    "get",
    "header"
  );

  const handleAdd = () => {
    setIsModalHeader(true);
  };
  const handleAddHome = () => {
    setItemEdit(null);
    setIsModalHome(true);
  };
  const handleAddAbout = () => {
    setItemEdit(null);
    setIsModalAbout(true);
  };
  const handleAddTestimonials = () => {
    setItemEdit(null);
    setIsModalTestimonials(true);
  };
  const handleAddServices = () => {
    setItemEdit(null);
    setIsModalServices(true);
  };
  const handleAddContact = () => {
    setItemEdit(null);
    setIsModalContact(true);
  };

  return (
    <>
      <header id="header" className="bg-white relative shadow-md w-full">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="ml-2 text-xl font-bold">MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button
              type="button"
              onClick={handleAddHome}
              className="hover:text-blue-500"
            >
              Home
            </button>
            <button
              type="button"
              onClick={handleAddAbout}
              className="hover:text-blue-500"
            >
              About
            </button>
            <button
              type="button"
              onClick={handleAddTestimonials}
              className="hover:text-blue-500"
            >
              Testimonials
            </button>
            <button
              type="button"
              onClick={handleAddServices}
              className="hover:text-blue-500"
            >
              Services
            </button>
            <button
              type="button"
              onClick={handleAddContact}
              className="hover:text-blue-500"
            >
              Contact
            </button>
            <button
              className="tooltip"
              data-tooltip="Add"
              type="button"
              // onClick={() => handleAdd(data, values)} // other syntax
              onClick={handleAdd}
            >
              <HiPencil className="bg-primary text-white size-8 p-1 border transition-all ease-in-out duration-200 rounded-full" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (now positioned absolutely) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg px-4 py-2 space-y-2 border-t border-gray-200">
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#"
              className="block py-2 hover:text-blue-500"
            >
              Home
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#about"
              className="block py-2 hover:text-blue-500"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#services"
              className="block py-2 hover:text-blue-500"
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
              className="block py-2 hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        )}
      </header>
      {isModalHeader && <ModalAddHeader setIsModal={setIsModalHeader} />}
      {isModalHome && (
        <ModalAddHome setIsModal={setIsModalHome} itemEdit={itemEdit} />
      )}
      {isModalAbout && (
        <ModalAddAbout setIsModal={setIsModalAbout} itemEdit={itemEdit} />
      )}
      {isModalTestimonials && (
        <ModalAddTestimonials setIsModal={setIsModalTestimonials} itemEdit={itemEdit} />
      )}
      {isModalServices && (
        <ModalAddServices setIsModal={setIsModalServices} itemEdit={itemEdit} />
      )}
      {isModalContact && (
        <ModalAddContact setIsModal={setIsModalContact} itemEdit={itemEdit} />
      )}
    </>
  );
};

export default Header;
