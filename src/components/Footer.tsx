import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contacto" className=" bg-color4 text-white py-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="">
          <img
            src="/logo cevicheria negativo.svg"
            alt="logo cevicheria negativo"
            className="mx-auto mb-2"
          />
          <p>
            La Ola Cevichera trae la frescura del mar a tu mesa <br /> con recetas
            peruanas auténticas.
          </p>
        </div>
        <div className="">
          <p>
            <b className="mb-2">Dirección y contacto</b>
          </p>
          <p>Calle Ficticia 123, Lima – Tel: <a className="underline" href="tel:+51987654321">+51 987 654 321</a> </p>
          <p>Horarios Lunes a Domingo, 12:00 – 23:00</p>
        </div>
        <div className="">
          <p className="mb-2">
            <b>Síguenos en</b>
          </p>
          <ul className="flex gap-4 justify-center">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-color2 transition"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-color2 transition"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-color2 transition"
              >
                <FaTiktok size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t-1 border-color2 w-[90vw] mx-auto mt-5 p-2">
        © {new Date().getFullYear()} La Ola Cevichera. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
