import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Contacto = () => {
  const socialLinks = [
    {
      icon: <FaWhatsapp className="text-white text-4xl" />, 
      title: "WhatsApp",
      description: "Envíanos un mensaje y responderemos rápido.",
      link: "https://wa.me/tu_numero",
      buttonText: "Contactar",
      bgColor: "bg-green-500 hover:bg-green-600",
      iconBg: "bg-green-500"
    },
    {
      icon: <FaFacebook className="text-white text-4xl" />, 
      title: "Facebook",
      description: "Síguenos para conocer nuestras novedades.",
      link: "https://facebook.com/tu_pagina",
      buttonText: "Visitar",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      iconBg: "bg-blue-600"
    },
    {
      icon: <FaInstagram className="text-white text-4xl" />, 
      title: "Instagram",
      description: "Explora nuestras fotos y novedades.",
      link: "https://instagram.com/tu_perfil",
      buttonText: "Visitar",
      bgColor: "bg-pink-500 hover:bg-pink-600",
      iconBg: "bg-pink-500"
    },
    {
      icon: <FaTiktok className="text-white text-4xl" />, 
      title: "TikTok",
      description: "Mira nuestros videos más recientes.",
      link: "https://tiktok.com/@tu_usuario",
      buttonText: "Visitar",
      bgColor: "bg-black hover:bg-gray-900",
      iconBg: "bg-black"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-6">
        
        {/* Título Mejorado */}
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">
          📞 Contacto
        </h1>
        <p className="text-lg text-white text-center mb-8 max-w-2xl">
          Puedes comunicarte con nosotros a través de las siguientes redes sociales.
          ¡Estaremos encantados de atenderte! 😊
        </p>

        {/* Grid responsivo (1 columna en móvil, 2 en pantallas más grandes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {socialLinks.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center 
                         transition-transform duration-300 hover:scale-105 w-full h-64 border-4 
                         border-gradient-to-r from-pink-500 via-purple-600 to-indigo-500"
            >
              {/* Icono en círculo */}
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${item.iconBg} shadow-md mb-4`}>
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white px-6 py-2 rounded-full font-bold transition duration-300 shadow-md ${item.bgColor}`}
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
