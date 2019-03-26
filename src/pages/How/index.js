import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

class How extends React.Component {
    render() {
        return (
            <App>
                <h1 className='tc'>Como?</h1>
                <p className='indent ml4-ns mt4-ns'>
                    Utilizamos da inteligência artifical da IBM, o Watson, que em conjunto com um algoritmo de leitura
                    é possível gerar uma análise sentimental do livro para comparar com o perfil do usuário
                    e assim realizar recomendações mais acertivas.
                </p>
                <p className='indent ml4-ns mt4-ns'>
                    Para que a análise aconteça, será utilizado a Interface de Programação de Aplicação (API) do
                    Watson como analisador do sentimento. Utilizando Watson, a inteligência artificial da International
                    Business Machines (IBM), será possível mapear livros por capítulo analisando os seguintes
                    sentimentos: desgosto, felicidade, medo, raiva e tristeza.
                </p>
                <p className='indent ml4-ns mt4-ns'>
                    Como base de teste foi utilizado fontes de dados literárias disponíveis na internet – Goodreads e
                    Project Gutemberg. Ambos contêm uma vasta base de dados literárias, desde livros de época a mais
                    conhecidos, tais como a coletânea de Harry Potter. Através dos resultados obtidos,
                    espera-se um nível de acerto de correspondência entre o usuário e livro, aumentando assim,
                    as chances de recomendação de um livro mais adequado ao perfil e sentimento desejado.

                </p>
            </App>
        )
    }
}

export default How;