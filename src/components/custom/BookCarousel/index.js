import React from 'react';

import Book from '../Book';
import RoundIcon from '../RoundIcon';

class BookCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		}

		this.handleStateChange = this.handleStateChange.bind(this);
	}

	handleStateChange(prop, val) {
		this.setState({
			[prop]: val
		});
	}

	render() {
		const { handleStateChange, props } = this;
		const { books, title } = props;
		const { index } = this.state;

		const focusedBooks = books.slice(index, index+5);

		return (
			<section>
				<h2 className="ma0 mt2 context-menu">{title}</h2>
				<div className="flex items-center justify-center">
					<RoundIcon
		                classButton="anima-shrink b--purple ba bg-transparent bw1 mr2"
		                classIcon="purple"
		                enabled={books.length > 5}
		                family="fas"
		                icon="arrow-left"
		                onClick={() => handleStateChange("index", index-1)}
		            />
					<div>
						{
							focusedBooks.map((book, key) => {
								const {
									authors, 
									cover,
									date,
									id,
									link,
									plataforms, 
									synopsis,
									title
								} = book;
								return (
									<Book
										key={key}
										thisAuthors={authors}
										thisCover={cover}
										thisDate={date}
										thisId={id}
										thisLink={link}
										thisPlataforms={plataforms}
										thisSynopsis={synopsis}
										thisTitle={title}
									/>
								);
							})
						}
					</div>
					<RoundIcon
		                classButton="anima-shrink b--purple ba bg-transparent bw1 ml1"
		                classIcon="purple"
		                enabled={books.length > 5}
		                family="fas"
		                icon="arrow-right"
		                onClick={() => handleStateChange("index", index+1)}
		            />
				</div>
			</section>
		);
	}
}

export default BookCarousel;