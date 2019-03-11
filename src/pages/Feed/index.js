import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import BookCarousel from '../../components/custom/BookCarousel';
import Card from '../../components/custom/Card';
import RoundIcon from '../../components/custom/RoundIcon';

import { requestRandomRecommendations, requestRecommendationsById } from '../../utils/actions';

import './styles/index.css';

const mapStateToProps = ({ access, book, email, recommendations }) => ({
	...access,
	...book,
	...email,
	...recommendations
});

const mapDispatchToProps = dispatch => ({
	handleRandomRecommendation: userId => dispatch(requestRandomRecommendations(userId)),
	handleRecommendationsById: userId => dispatch(requestRecommendationsById(userId))
});

class Feed extends React.Component {
	componentWillMount() {
		const { 
			handleRandomRecommendation, 
			handleRecommendationsById, 
			userId 
		} = this.props;

		handleRandomRecommendation(userId);
		handleRecommendationsById(userId);
	}

	render() {
		const { 
			randomRecommendations,
			recommendationsById,
			authors,
			cover,
			date,
			link,
			plataforms,
			synopsis,
			title
		} = this.props;
		return (
			<App>
				<div className="flex h-100 items-center w-100">
					<div className="flex">
						<section className="flex flex-column flex-grow-1 items-center justify-between pb3 pt3 vw-40">
							<Card
								authors={authors}
								cover={cover}
								date={date}
								link={link}
								plataforms={plataforms}
								synopsis={synopsis}
								title={title}
								className=""
							/>
							<section>
								<RoundIcon
					                classButton="anima-jump bg-transparent bn mr2"
					                classIcon="red"
					                family="fas"
					                icon="heart"
					                title="lendo JÁ!"					                
					            />
					            <RoundIcon
					                classButton="anima-jump bg-transparent bn mr2"
					                classIcon="green"
					                family="fas"
					                icon="thumbs-up"
					                title="adicionar à minha lista de quero ler"					                
					            />
					            <RoundIcon
					                classButton="anima-jump bg-transparent bn mr2"
					                classIcon="gray"
					                family="fas"
					                icon="glasses"
					                title="esse eu já li"					                
					            />
							</section>
						</section>	
						<section className="flex flex-column items-center vw-60">
							<BookCarousel books={recommendationsById} title="recomendações" />
							<BookCarousel books={randomRecommendations} title="conheça também" />
						</section>
					</div>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Feed);