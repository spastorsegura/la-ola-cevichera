import { motion } from "framer-motion";

const MenuSection = () => {
  const platos = [
    {
      nombre: "Ceviche Clásico",
      desc: "Pescado fresco marinado en limón, cebolla, ají limo y cancha serrana.",
      precio: "S/ 35",
      imagen: "/Card de plato/plato1.png",
    },
    {
      nombre: "Ceviche Mixto",
      desc: "Pescado + mariscos frescos, perfecto para compartir.",
      precio: "S/ 40",
      imagen: "/Card de plato/plato2.png",
    },
    {
      nombre: "Tiradito Nikkei",
      desc: "Lomo de pescado en finos cortes con salsa de soya y ají amarillo.",
      precio: "S/ 38",
      imagen: "/Card de plato/plato3.png",
    },
    {
      nombre: "Arroz con Mariscos",
      desc: "Arroz al wok con mariscos, ají panca y culantro fresco.",
      precio: "S/ 45",
      imagen: "/Card de plato/plato4.png",
    },
    {
      nombre: "Jalea Mixta",
      desc: "Crocante de mariscos, yuca frita y salsa criolla.",
      precio: "S/ 55",
      imagen: "/Card de plato/plato5.png",
    },
    {
      nombre: "Chaufa de Mariscos",
      desc: "Arroz frito al estilo chifa con langostinos y calamares.",
      precio: "S/ 35",
      imagen: "/Card de plato/plato6.png",
    },
  ];

  return (
    <section id="menu" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <motion.h3
          className="text-3xl text-color1 font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Menú Marino
        </motion.h3>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Descubre nuestros platos estrella, preparados al momento con insumos
          frescos y el auténtico sabor peruano.
        </motion.p>
      </div>

      <h2 className="text-2xl font-medium text-color3 mb-8">Entradas frías</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platos.map((plato, index) => (
          <motion.div
            key={plato.nombre}
            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={plato.imagen}
              alt={plato.nombre}
              className="mx-auto mb-4 h-40 object-contain"
            />
            <h4 className="text-xl font-semibold text-color1">
              {plato.nombre}
            </h4>
            <p className="mt-2 text-gray-600">{plato.desc}</p>
            <p className="mt-2 font-bold">{plato.precio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
