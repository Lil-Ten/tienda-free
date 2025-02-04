
import Navbar from "../components/Navbar"; // Ajusta la ruta según la ubicación de tu archivo

const ManageProducts = () => {
  // Lista de productos de ejemplo con categorías
  const products = [
    { id: 1, name: 'Teresa', price: '45.00 €', imageUrl: '/calzado.jpg', category: 'Calzado' },
    { id: 2, name: 'Juan', price: '30.00 €', imageUrl: '/calzado.jpg', category: 'Calzado' },
    { id: 3, name: 'Camiseta Hombres', price: '25.00 €', imageUrl: '/hombres.jpg', category: 'Hombres' },
    // Agrega más productos según sea necesario
  ];

  const [filteredCategory, setFilteredCategory] = useState(''); // Para filtrar los productos por categoría

  // Función para manejar la navegación
  const navigateTo = (path) => {
    window.location.href = path;  // Redirige a la ruta deseada
  };

  // Función para filtrar productos por categoría
  const filterProducts = (category) => {
    setFilteredCategory(category);
  };

  // Función para manejar eliminación de productos
  const handleDelete = (id) => {
    alert(`Producto ${id} eliminado`);
    // Lógica para eliminar el producto (esto debería actualizar el estado o hacer una petición a la base de datos)
  };

  // Función para manejar actualización de productos
  const handleUpdate = (id) => {
    alert(`Actualizar producto ${id}`);
    // Lógica para actualizar el producto (esto debería abrir un formulario de edición o algo similar)
  };

  // Filtramos los productos por categoría si hay alguna seleccionada
  const displayedProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Navbar /> <br />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Gestión de Productos</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
          <i className="fas fa-sign-out-alt mr-2"></i> Cerrar sesión
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Bienvenido Administrador</h2>
        <p className="text-sm text-gray-600">Esta es la lista de tus productos. Aquí puedes gestionar, eliminar o editar tus productos.</p>
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => navigateTo("/dashboard")} 
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
        >
          Agregar Producto
        </button>
        <button 
          onClick={() => navigateTo("/")} 
          className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
        >
          Ir al Inicio
        </button>
      </div>

      {/* Menú de categorías */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {['Hombres', 'Damas', 'Niños y Niñas', 'Accesorios', 'Calzado', 'Colecciones'].map((category) => (
          <button
            key={category}
            onClick={() => filterProducts(category)}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => filterProducts('')}
          className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 w-full sm:w-auto"
        >
          Todos
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Imagen</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Nombre</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Precio</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="py-4 px-6">
                  <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{product.name}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{product.price}</td>
                <td className="py-4 px-6 flex items-center space-x-4">
                  <button
                    onClick={() => handleUpdate(product.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <i className="fas fa-edit"></i> Actualizar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
