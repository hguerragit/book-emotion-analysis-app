import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

class Us extends React.Component {
    render() {
        return (
            <App>
                <title>Nós</title>
                <h1>Nós</h1>
                <p>Somos um grupo de quatro alunos do curso de ciência da computação da unip Marquês,
                    que como projeto de conclusão de curso escolhemos desenvolver esse Web App
                </p>
            </App>
        )
    }
}

export default Us;