import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import CardCarousel from '../../components/custom/CardCarousel';
import Feeling from '../../components/custom/Feeling';
import RoundIcon from '../../components/custom/RoundIcon';

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
	handleClickFeeling: (feeling, userId) => dispatch(requestRecommendationsByFeeling(feeling, userId))
});

class Browse extends React.Component {
	render() {
		const {
			userId,
			recommendationsByFeeling,
			handleClickFeeling
		} = this.props;

		return (
			<App>
				<div className="flex h-100 items-center w-100">
					<div className="flex">
						<section className="flex flex-grow-1 justify-center pb3 pt3 vw-60">
							<CardCarousel 
								books={recommendationsByFeeling} 
								className="flex-grow-1"
							/>
						</section>	
						<section className="flex flex-column items-center vw-40">
							<Feeling
								img="https://imgur.com/gFw4WwH.png"
								title="angry"
								onClick={() => handleClickFeeling(FEELING_ANGRINESS, userId)}
							/>
							<Feeling
								img="https://imgur.com/1HXb97B.png"
								title="sad"
								onClick={() => handleClickFeeling(FEELING_SADNESS, userId)}
							/>
							<Feeling
								img="https://imgur.com/DF7toNB.png"
								title="happy"
								onClick={() => handleClickFeeling(FEELING_HAPPINESS, userId)}
							/>
						</section>
					</div>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Browse);