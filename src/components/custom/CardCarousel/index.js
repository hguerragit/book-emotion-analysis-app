import React from 'react';
import Card from '../Card';
import RoundIcon from '../RoundIcon';

class CardCarousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
	}

	handleStateChange(state, val) {
		this.setState({
			[state]: val
		});
	}

	render() {
		const { props } = this;
		const { books, className, handleStateChange } = props;

		const viewbleBooks = books.slice(1, 5);
		const book = books[0] || {};
		const {
			authors, 
			cover,
			date,
			link,
			plataforms, 
			synopsis,
			title
		} = book;

		return (
			<article>
				<section className={`flex items-center justify-between ${className}`}>
					<RoundIcon
		                classButton="bg-transparent bn mr2"
		                classIcon="green"
		                family="fas"
		                icon="thumbs-up"
		                title="gostei"					                
		            />
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
		            <RoundIcon
		                classButton="bg-transparent bn mr2"
		                classIcon="red"
		                family="fas"
		                icon="thumbs-down"
		                title="não gostei"					                
		            />
				</section>
				<section className="flex items-center justify-center">
					{
						viewbleBooks.map(({ cover, title }, key) => (
							<img
								key={key}
								alt={title}
								src={cover}
								className="cover mr2 mt4"
								style={{
									height: "146px",
									width: "98px"
								}}
							/> 
						))
					}
				</section>
			</article>
		);
	}
}

export default CardCarousel;