import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

class Us extends React.Component {
    render() {
        return (
            <App>
                <h1 className='tc'>Nós</h1>
                <p className='indent ml4-ns mt4-ns'>
                    Somos um grupo de quatro alunos, Guilherme Bruno, Gustavo Santos, Henrique Guerra e William Souza,
                    do curso de ciência da computação da UNIP Marquês, onde escolhemos como projeto de
                    conclusão de curso desenvolver esse Web App.
                </p>
                <p className='indent ml4-ns mt4-ns'>
                    A idéia surgiu do gosto dos integrantes do grupo pela leitura e da vontade de aplicar a tecnologia
                    em algo tão simples como o ato de recomendar um livro. Todos do grupo têm bastante contato com a leitura,
                    seja ela para estudo ou apenas lazer, influenciando muito e nos motivando a levar esse projeto até o fim.
                </p>
            </App>
        )
    }
}

export default Us;