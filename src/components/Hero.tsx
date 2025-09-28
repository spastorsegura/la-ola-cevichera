import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/6037328_Salmon_Chef_1280x720.mp4" type="video/mp4" />
      </video>

      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-color1/80 -z-10"></div>

      {/* Contenido */}
      <div className="flex justify-between w-full px-10">
        {/* Texto con animación */}
        <motion.div
          className="text-left w-[40vw]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Siente el Sabor del Mar
          </motion.h2>

          <motion.p
            className="text-lg mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            Ceviches frescos, tiraditos y el mejor sabor peruano en un solo
            lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link
              to="reserva"
              smooth={true}
              duration={600}
              className="bg-color5 hover:bg-color2 text-color1 px-6 py-3 rounded-2xl transition cursor-pointer inline-block"
            >
              ¡Reserva tu mesa!
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/olas.svg"
            alt="olas"
            className="max-w-xs md:max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
