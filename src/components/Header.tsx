import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <img
        src="/logo cevicherria 1.svg"
        alt="logo cevicheria"
        className="h-20"
      />

      {/* Menú Desktop */}
      <nav className="hidden md:flex gap-6">
        <Link
          to="inicio"
          smooth
          duration={500}
          offset={-150}
          className="cursor-pointer hover:text-color2"
        >
          Inicio
        </Link>
        <Link
          to="menu"
          smooth
          duration={500}
          offset={-100}
          className="cursor-pointer hover:text-color2"
        >
          Menú
        </Link>
        <Link
          to="recomendacion"
          smooth
          duration={500}
          offset={-100}
          className="cursor-pointer hover:text-color2"
        >
          Recomendación
        </Link>
        <Link
          to="reserva"
          smooth
          duration={500}
          offset={-100}
          className="cursor-pointer hover:text-color2"
        >
          Reserva
        </Link>
        <Link
          to="contacto"
          smooth
          duration={500}
          offset={-50}
          className="cursor-pointer hover:text-color2"
        >
          Contacto
        </Link>
      </nav>

      {/* Botón Toggle Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menú Mobile Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[7rem] left-0 w-full bg-color2 shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-40"
          >
            <a
              href="#inicio"
              className="hover:text-color1 transition"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#inicio")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Inicio
            </a>
            <a
              href="#menu"
              className="hover:text-color1 transition"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#menu")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Menú
            </a>
            <a
              href="#recomendacion"
              className="hover:text-color1 transition"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#recomendacion")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Recomendación
            </a>
            <a
              href="#reserva"
              className="hover:text-color1 transition"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#reserva")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Reserva
            </a>
            <a
              href="#contacto"
              className="hover:text-color1 transition"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
