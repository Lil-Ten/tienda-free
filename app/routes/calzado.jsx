import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaShoePrints } from "react-icons/fa";

const Calzado = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-900">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-6">
        
        {/* Título de la Página */}
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center">
          CALZADO
        </h1>
        
        {/* Descripción */}
        <div className="flex flex-col items-center">
          <FaShoePrints className="text-6xl text-white mb-4" />
          <p className="text-lg text-white text-center max-w-3xl">
            Encuentra el calzado perfecto para cada ocasión, cómodo y elegante.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calzado;
