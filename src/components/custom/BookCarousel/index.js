import React from 'react';

import Book from '../Book';
import RoundIcon from '../RoundIcon';

const BookCarousel = ({ books=[], title="" }) => {
	const focusedBooks = books.slice(0, 5);
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
	            />
				<div>
					{
						focusedBooks.map((book, key) => {
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
								<Book
									key={key}
									thisAuthors={authors}
									thisCover={cover}
									thisDate={date}
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
	            />
			</div>
		</section>
	);
};

export default BookCarousel;