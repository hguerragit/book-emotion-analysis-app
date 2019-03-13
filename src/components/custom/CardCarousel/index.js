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

		const viewbleBooks = books.slice(0, 4);
		const book = books[0] || {};
		const {
			autor: authors, 
			img_capa: cover,
			data: date,
			site: link,
			plataforma: plataforms, 
			sinopse: synopsis,
			nome_livro: title
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
						viewbleBooks.map((book, key) => {
							const { img_capa, nome_livro } = book;
							return (
								<img
									key={key}
									alt={nome_livro}
									src={img_capa}
									className="cover mr2 mt4"
									style={{
										height: "146px",
										width: "98px"
									}}
								/> 
							)
						})
					}
				</section>
			</article>
		);
	}
}

export default CardCarousel;