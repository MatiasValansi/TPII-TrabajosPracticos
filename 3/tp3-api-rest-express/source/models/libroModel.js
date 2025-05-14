let libros = [
	{
		"id": 1,
		"titulo": "1984",
		"autor": "George Orwell",
		"año": 1949
	}
];

const obtenerTodos = () => libros;
const obtenerPorId = (id) => libros.find((libro) => libro.id === id);
const agregarLibro = (libro) => libros.push(libro);
const actualizarLibro = (id, datos) => {
	const index = libros.findIndex((libro) => libro.id === id);
	if (index !== -1) libros[index] = { ...libros[index], ...datos };
};
const borrarLibro = (id) => {
	libros = libros.filter((libro) => libro.id !== id);
};

export {
	obtenerTodos,
	obtenerPorId,
	agregarLibro,
	actualizarLibro,
	borrarLibro,
};
