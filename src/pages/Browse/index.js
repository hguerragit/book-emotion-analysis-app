import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import Card from '../../components/custom/Card';
import Cover from '../../components/custom/Cover';
import Feeling from '../../components/custom/Feeling';
import RoundIcon from '../../components/custom/RoundIcon';
import Shelfer from '../../components/custom/Shelfer';

import {
	FEELING_ANGRINESS,
	FEELING_DISGUST,
	FEELING_FEAR,
	FEELING_HAPPINESS,
	FEELING_SADNESS,
	LIST_READING
} from '../../utils/constants';

import { clickBook, requestRecommendationsByFeeling } from '../../utils/actions';

const mapStateToProps = ({ access, book, feeling, recommendations }) => ({
	...access,
	...book,
	...feeling,
	...recommendations
});

const mapDispatchToProps = dispatch => ({
	handleClickFeeling: (feeling, userId) => dispatch(requestRecommendationsByFeeling(feeling, userId)),
	handleSelectBook: book => dispatch(clickBook(book))
});

class Browse extends React.Component {
	render() {
		const {
			userId,
			recommendationsByFeeling,
			handleClickFeeling,
			handleSelectBook
		} = this.props;

		const viewbleBooks = recommendationsByFeeling.slice(1, 5);
		const book = recommendationsByFeeling[0] || {};
		handleSelectBook(book);

		return (
			<App>
				<div className="flex h-100 w-100">
					<section className="flex h-100 items-center justify-center pb3 pt3 vw-60">
						<Shelfer
							action={LIST_READING}
			                classButton="bg-transparent bn mr2"
			                classIcon="green"
			                family="fas"
			                icon="thumbs-up"
			                title="gostei"					                
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
			            <Shelfer
			                classButton="bg-transparent bn mr2"
			                classIcon="red"
			                family="fas"
			                icon="thumbs-down"
			                title="não gostei"					                
			            />
					</section>	
					<section className="flex flex-column h-100 items-center justify-center vw-40">
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
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Browse);