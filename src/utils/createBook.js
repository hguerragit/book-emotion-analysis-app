const createBook = ({
	autor,
	id_livro,
	img_capa,
	data,
	site,
	plataforma,
	sinopse,
	nome_livro,
	status
}) => ({
	authors: autor, 
	cover: img_capa,
	date: data,
	id: id_livro,
	link: site,
	plataforms: plataforma, 
	synopsis: sinopse,
	title: nome_livro,
	status
});

export default createBook;