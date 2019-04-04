import axios from 'axios';
import { enhanceMethods } from './object';

const addDomain = str => `https://api-analise-sentimento.mybluemix.net/${str}`;

const parseToPost = url => {
	const [endpoint, queryString=""] = url.split("?");
	const params = queryString.split("&");
    const data = queryString === "" ? new URLSearchParams() : params.reduce((params, param) => {
		const [field, value] = param.split("=");
		params.append(field, value);

		return params;
	}, new URLSearchParams());

	return {
		endpoint,
		data
	};
};

const endpoints = {
	addBookToTheBase: (
		userId,
		title,
		author,
		status
	) => `add_livro_base/?id_usuario=${userId}&status=${status}&titulo=${title}&autor=${author}`,
	addBookToTheBookList: (
		userId,
		bookId,
		plataform,
		status
	) => `add_livro_usuario/?id_usuario=${userId}&id_livro=${bookId}&plataforma=${plataform}&status=${status}&funcao=livro`,
	criptografy: (texto) => `criptografia/?texto=${texto}`,
	getUserBooklist: (userId) => `lista_livro_usuario/?id_usuario=${userId}`,
	login: (email, password) => `login/?email=${email}&senha=${password}`,
	keys: () => `keys`,
	randomRecommendations: (userId) => `recomendacao_aleatorio/?id_usuario=${userId}`,
	recommendationsById: (userId) => `recomendacao_id_usuario/?id=${userId}`,
	recommendationsByFeeling: (
		feeling,
		userId,
		mustHaveSinopsis=true,
		mustHaveBeenFullyAnalyzed=true
	) => `recomendacao_emocao/?emocao=${feeling}&id_usuario=${userId}&sinopse=${mustHaveSinopsis}&analise_total=${mustHaveBeenFullyAnalyzed}`,
	searchEmail: (email) => `busca_email/?email=${email}`,
	signUp: (email, password) => `cadastro/?email=${email}&senha=${password}`,
	thirdPartyLogin: (plataform) => `acesso_rede_social/?plataforma=${plataform}`,
	tweet: (
		userId, 
		bookId, 
		plataform, 
		tweet
	) => `twitter/?id_usuario=${userId}&funcao=tweet&tweet=${tweet}&id_livro=${bookId}&plataforma=${plataform}`
};

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

const post = ({ data, endpoint }) => axios
	.post(endpoint, data, headers)
	.then(request => request.data);

const api = enhanceMethods(
	endpoints, 
	addDomain, 
	parseToPost, 
	post
);

export default api;
