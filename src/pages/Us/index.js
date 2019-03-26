import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

class Us extends React.Component {
    render() {
        return (
            <App>
                <title>Nós</title>
                <h1 className='left-2'>Nós</h1>
                <p>Somos um grupo de quatro alunos, Guilherme Bruno, Gustavo Santos, Henrique Guerra e Willian  do curso de ciência da computação da unip Marquês,
                    que como projeto de conclusão de curso escolhemos desenvolver esse Web App.
                </p>
                <p>
                    A ideia surgiu do gosto dos alunos do grupo pela leitura e da vontade de aplicar a tecnologia
                    em algo tão simples como o ato de recomendar um livro.
                </p>
            </App>
        )
    }
}

export default Us;