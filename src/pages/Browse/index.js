import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import Card from '../../components/custom/Card';
import Feeling from '../../components/custom/Feeling';

import data from './data';

import {
	FEELING_ANGRINESS,
	FEELING_DISGUST,
	FEELING_FEAR,
	FEELING_HAPPINESS,
	FEELING_SADNESS
} from '../../utils/constants';

import { 
	clickFeeling,
	requestRecommendationsByFeeling
} from '../../utils/actions';

const mapStateToProps = ({ access, feeling, recommendations }) => ({
	...access,
	...feeling,
	...recommendations
});

const mapDispatchToProps = dispatch => ({
	handleClickFeeling: feeling => dispatch(clickFeeling(feeling)),
	handleBrowserLoad: (feeling, userId) => dispatch(requestRecommendationsByFeeling(feeling, userId))
});

class PickAndMatch extends React.Component {
	componentWillMount() {
		const { 
			feeling, 
			userId,
			handleBrowserLoad
		} = this.props;

		handleBrowserLoad(feeling, userId);
	}

	render() {
		const {
			handleClickFeeling
		} = this.props;

		const book = data[0];

		return (
			<App>
				<div className="flex h-100 items-center justify-around w-100">
					<div className="flex h-100 items-center w-50 context-menu">
						<Card
							authors={book.autor}
							cover={book.img_capa}
							date={book.data}
							plataforms={book.goodreads}
							synopsis={book.sinopse}
							title={book.nome_livro}
						/>
					</div>
					<div className="flex flex-column items-center justify-center h-100 w-50">
						<Feeling
							img="https://imgur.com/gFw4WwH.png"
							title="angry"
							onClick={() => handleClickFeeling(FEELING_ANGRINESS)}
						/>
						<Feeling
							img="https://imgur.com/1HXb97B.png"
							title="sad"
							onClick={() => handleClickFeeling(FEELING_SADNESS)}
						/>
						<Feeling
							img="https://imgur.com/DF7toNB.png"
							title="happy"
							onClick={() => handleClickFeeling(FEELING_HAPPINESS)}
						/>
					</div>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(PickAndMatch);