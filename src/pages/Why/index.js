import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

class Why extends React.Component {
    render() {
        return (
            <App>
                <h1 className='tc'>Por quê?</h1>
                <p className='indent ml4-ns mt4-ns'>
                    Nossa motivação para esse trabalho partiu de alguns estudos que mostram que as pessoas não costumam
                    ler muito e que as recomendações de livro costumam ser de familiares e amigos próximos por conhecerem
                    mais a pessoa, mas nem sempre essas recomendações são o que o leitor esperava.
                </p>
                <p className='indent ml4-ns mt4-ns'>
                    Ainda mais interessante são os resultados das pesquisas de como os livros são descobertos. Segundo a
                    pesquisa realizada pela NLB, recomendações por conhecidos lideram com 54%. Já redes sociais estão em
                    segundo lugar com 48% e este número sobe para o topo quando analisado apenas o grupo dos leitores de 20 a 29 anos
                     – chegando a impressionantes 73% (NATIONAL, 2016, p. 22). Há, porém, um interessante overlap aqui:
                     os grupos que citam redes sociais como mais importantes que recomendações pessoais (20-29, 30-39, 40-49
                     anos) são adultos em idade produtiva (NATIONAL, 2016, p. 23).
                </p>
            </App>
        )
    }
}

export default Why;
