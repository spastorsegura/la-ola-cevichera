import { motion } from "framer-motion";

interface RecomendacionProps {
  titulo?: string;
  descripcion?: string;
  precio?: string;
  imagen?: string;
  nota?: string;
}

const Recomendacion: React.FC<RecomendacionProps> = ({
  titulo = "Especial La Ola",
  descripcion = "Ceviche Clásico + Jalea Mixta + 2 Chichas Moradas.",
  precio = "S/ 99.00",
  imagen = "/recomendacion.jpg",
  nota = "(ideal para 2 personas)",
}) => {
  return (
    <section
      id="recomendacion"
      className="mx-auto px-6 py-10 flex flex-col md:flex-row items-stretch gap-6"
    >
      {/* Imagen */}
      <motion.img
        src={imagen}
        alt={titulo}
        className="rounded-2xl shadow-lg md:w-1/2 object-cover h-72 md:h-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Texto */}
      <motion.div
        className="bg-gray-100 p-6 rounded-2xl md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{titulo}</h2>
        <p className="text-gray-600 mb-3">{descripcion}</p>
        <p className="text-3xl font-bold text-cyan-700 mb-2">{precio}</p>
        <p className="text-sm text-gray-500">{nota}</p>
      </motion.div>
    </section>
  );
};

export default Recomendacion;
