import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const categories = [
  { name: "Hombres", image: "/hombres.jpg", link: "/hombres" },
  { name: "Niños y Niñas", image: "/ninos.jpg", link: "/ninos_y_ninas" },
  { name: "Accesorios", image: "/accesorios.jpg", link: "/accesorios" },
  { name: "Calzado", image: "/calzado.jpg", link: "/calzado" },
  { name: "Colecciones", image: "/colecciones.jpg", link: "/colecciones" },
  { name: "Damas", image: "/damas.jpg", link: "/damas" },
  { name: "Ofertas", image: "/ofertas.jpg", link: "/ofertas" },
];

export default function Index() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Banner */}
      <div className="relative h-96 flex items-center justify-center">
        <img
          src="/banner.png"
          alt="Banner de la tienda"
          className="absolute inset-0 w-full h-full object-cover brightness-5"
        />
      </div>

      {/* Introducción */}
      <motion.div
        className="py-12 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Bienvenidos a [Nombre de la Tienda]
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Encuentra tu estilo con nosotros
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-2">
          Tu tienda de ropa favorita para todas las temporadas. Últimas tendencias con la mejor calidad y precio.
        </p>
      </motion.div>

      {/* Categorías */}
      <motion.main
        className="container mx-auto px-6 py-12"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Explora Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              variants={cardHover}
              whileHover="hover"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <a
                  href={category.link}
                  className="inline-block bg-white text-indigo-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                  Ver más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
