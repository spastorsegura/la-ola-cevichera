import { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    politica: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validación por campo individual
  const validateField = (name: string, value: string | boolean) => {
    let error = "";

    switch (name) {
      case "nombre":
        if (typeof value === "string" && value.trim().length < 2) {
          error = "El nombre debe tener al menos 2 caracteres.";
        }
        break;
      case "email":
        if (
          typeof value === "string" &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
          error = "Ingresa un email válido.";
        }
        break;
      case "telefono":
        if (typeof value === "string" && value && !/^\d{7,15}$/.test(value)) {
          error = "El teléfono debe tener entre 7 y 15 dígitos (opcional).";
        }
        break;
      case "mensaje":
        if (typeof value === "string" && value.trim().length < 20) {
          error = "El mensaje debe tener al menos 20 caracteres.";
        }
        break;
      case "politica":
        if (value === false) {
          error = "Debes aceptar la política de privacidad.";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const fieldValue = type === "checkbox" ? checked : value;

    setForm({ ...form, [name]: fieldValue });

    // Validar en vivo
    validateField(name, fieldValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    Object.entries(form).forEach(([name, value]) => validateField(name, value));

    if (Object.values(errors).every((error) => error === "")) {
      console.log("Formulario enviado:", form);
      alert("¡Mensaje enviado con éxito!");
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
        politica: false,
      });
      setErrors({});
    }
  };

  return (
    <section id="reserva" className="bg-color1 text-white py-16 px-6 mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">Contáctanos</h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 lg:w-[50vw] mx-auto"
        noValidate
      >
        {/* Nombre */}
        <div>
          <input
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl border outline-none transition 
              ${
                errors.nombre
                  ? "ring-2 ring-red-500 border-red-500"
                  : "border-gray-300"
              }
            `}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            type="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl border outline-none transition 
              ${
                errors.email
                  ? "ring-2 ring-red-500 border-red-500"
                  : "border-gray-300"
              }
            `}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Teléfono (opcional, solo valida si escriben algo) */}
        <div>
          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono (opcional)"
            value={form.telefono}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl border outline-none transition
              ${
                errors.telefono
                  ? "ring-2 ring-red-500 border-red-500"
                  : "border-gray-300"
              }
            `}
          />
          {errors.telefono && (
            <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            value={form.mensaje}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 rounded-xl border resize-none outline-none transition 
              ${
                errors.mensaje
                  ? "ring-2 ring-red-500 border-red-500"
                  : "border-gray-300"
              }
            `}
          />
          {errors.mensaje && (
            <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
          )}
        </div>

        {/* Checkbox política */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="politica"
            checked={form.politica}
            onChange={handleChange}
            className={`w-4 h-4 ${
              errors.politica ? "ring-2 ring-red-500" : ""
            }`}
          />
          <label htmlFor="politica" className="text-sm">
            Acepto la{" "}
            <a href="/politica" className="text-color2 underline">
              política de privacidad
            </a>
          </label>
        </div>
        {errors.politica && (
          <p className="text-red-500 text-sm">{errors.politica}</p>
        )}

        {/* Botón */}
        <button
          type="submit"
          className="bg-color2 hover:bg-color3 text-color1 py-3 rounded-2xl transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contacto;
