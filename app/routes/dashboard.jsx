
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importar FontAwesome
import {
  faUpload,
  faBox,
  faPlus,
  faTag,
  faAlignLeft,
  faList,
  faImage,
} from "@fortawesome/free-solid-svg-icons"; // Importar iconos específicos

export default function Dashboard() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto agregado:", {
      productName,
      price,
      description,
      category,
      image,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-6">
      {/* Título de la página */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          <FontAwesomeIcon icon={faUpload} className="mr-2 text-purple-500" />
          Subir imágenes
        </h1>

        {/* Mensaje de bienvenida */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Bienvenido, Administrador</h2>
          <p className="text-gray-400">Gestiona y agrega nuevos productos.</p>
        </div>

        {/* Formulario para agregar productos */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-500">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Agregar Producto
          </h2>

          {/* Campo: Nombre del producto */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-gray-300">
              <FontAwesomeIcon icon={faBox} className="mr-2 text-purple-500" />
              Nombre del Producto
            </label>
            <input
              type="text"
              placeholder="Nombre del producto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Campo: Precio */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-gray-300">
              <FontAwesomeIcon icon={faTag} className="mr-2 text-purple-500" />
              Precio
            </label>
            <input
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Campo: Descripción */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-gray-300">
              <FontAwesomeIcon icon={faAlignLeft} className="mr-2 text-purple-500" />
              Descripción
            </label>
            <textarea
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="4"
            />
          </div>

          {/* Campo: Categoría */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-gray-300">
              <FontAwesomeIcon icon={faList} className="mr-2 text-purple-500" />
              Categoría
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Ofertas">Ofertas</option>
              <option value="Ropa">Ropa</option>
              <option value="Calzado">Calzado</option>
              <option value="Accesorios">Accesorios</option>
            </select>
          </div>

          {/* Campo: Imagen */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-2 text-gray-300">
              <FontAwesomeIcon icon={faImage} className="mr-2 text-purple-500" />
              Imagen
            </label>
            <div className="flex items-center justify-center bg-gray-700 p-4 rounded-lg">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Seleccionar archivo
              </label>
              <span className="ml-4 text-gray-400">
                {image ? image.name : "No se ha seleccionado ningún archivo"}
              </span>
            </div>
          </div>

          {/* Botón para agregar producto */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-bold"
          >
            Agregar Producto
          </button>
        </form>
      </div>
    </div>
  );
}