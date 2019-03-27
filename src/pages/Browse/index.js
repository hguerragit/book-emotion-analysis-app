import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import Card from '../../components/custom/Card';
import Cover from '../../components/custom/Cover';
import Feeling from '../../components/custom/Feeling';
import RoundIcon from '../../components/custom/RoundIcon';

import {
	FEELING_ANGRINESS,
	FEELING_DISGUST,
	FEELING_FEAR,
	FEELING_HAPPINESS,
	FEELING_SADNESS,
	LIST_READING
} from '../../utils/constants';

import { 
	clickAddBookToBooklist,
	clickBook, 
	clickShortenRecommendationByFeeling,
	requestRecommendationsByFeeling
} from '../../utils/actions';

const mapStateToProps = ({ access, book, feeling, recommendations }) => ({
	...access,
	...book,
	...feeling,
	...recommendations
});

const mapDispatchToProps = dispatch => ({
	handleBookListAddClick: (
		userId, 
		bookId, 
		plataform, 
		status
	) => dispatch(clickAddBookToBooklist(userId, bookId, plataform, status)),
	handleClickFeeling: (feeling, userId) => dispatch(requestRecommendationsByFeeling(feeling, userId)),
	handleSelectBook: book => dispatch(clickBook(book)),
	handleShortenCarousel: recs => dispatch(clickShortenRecommendationByFeeling(recs.slice(1, recs.length))) 
});

class Browse extends React.Component {
	render() {
		const {
			id,
			plataforms,
			userId,
			recommendationsByFeeling,
			handleBookListAddClick,
			handleClickFeeling,
			handleShortenCarousel,
			handleSelectBook
		} = this.props;

		const viewbleBooks = recommendationsByFeeling.slice(1, 5);
		const book = recommendationsByFeeling[0] || {};
		handleSelectBook(book);

		return (
			<App>
				<div className="flex h-100 w-100">
					<section className="flex h-100 items-center justify-center pb3 pt3 vw-60">
						<RoundIcon
			                classButton="bg-transparent bn mr2"
			                classIcon="green"
			                family="fas"
			                icon="thumbs-up"
			                title="gostei"
			                onClick={() => {
			                	handleShortenCarousel(recommendationsByFeeling);
			                	handleBookListAddClick(userId, id, plataforms, LIST_READING);
			                }} 				                
			            />
			            <section className="flex flex-column h-100 items-center justify-between">
			            	<Card
								authors={book.authors}
								cover={book.cover}
								date={book.date}
								link={book.link}
								plataforms={book.plataforms}
								synopsis={book.synopsis}
								title={book.title}
							/>
							<section className="flex items-center justify-center">
								{
									viewbleBooks.map(({ cover, title }) =>
										<Cover
											alt={title}
											src={cover}
											className="mr2 mt4"
										/> 
									)
								}
							</section>
			            </section>
			            <RoundIcon
			                classButton="bg-transparent bn mr2"
			                classIcon="red"
			                family="fas"
			                icon="thumbs-down"
			                title="não gostei"	
			                onClick={() => handleShortenCarousel(recommendationsByFeeling)}				                
			            />
					</section>	
					<section className="flex h-100 items-center justify-center vw-40">
						<Feeling
							img="https://imgur.com/tLxWNA1.png"
							title="raiva"
							onClick={() => handleClickFeeling(FEELING_ANGRINESS, userId)}
						/>
						<Feeling
							img="https://imgur.com/IhREum4.png"
							title="tristeza"
							onClick={() => handleClickFeeling(FEELING_SADNESS, userId)}
						/>
						<Feeling
							img="https://imgur.com/dvsuOaj.png"
							title="felicidade"
							onClick={() => handleClickFeeling(FEELING_HAPPINESS, userId)}
						/>
						<Feeling
							img="https://imgur.com/wVVQ8Br.png"
							title="medo"
							onClick={() => handleClickFeeling(FEELING_FEAR, userId)}
						/>
						<Feeling
							img="https://imgur.com/1dj0GBl.png"
							title="desgosto"
							onClick={() => handleClickFeeling(FEELING_DISGUST, userId)}
						/>
					</section>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Browse);