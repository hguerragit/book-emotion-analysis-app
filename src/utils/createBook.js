const createBook = ({
	autor,
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
	link: site,
	plataforms: plataforma, 
	synopsis: sinopse,
	title: nome_livro,
	status
});

export default createBook;