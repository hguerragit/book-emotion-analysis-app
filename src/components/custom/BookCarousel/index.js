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
								autor: thisAuthors, 
								img_capa: thisCover,
								data: thisDate,
								site: thisLink,
								plataforma: thisPlataforms, 
								sinopse: thisSynopsis,
								nome_livro: thisTitle
							} = book;
							return (
								<Book
									key={key}
									thisAuthors={thisAuthors}
									thisCover={thisCover}
									thisDate={thisDate}
									thisLink={thisLink}
									thisPlataforms={thisPlataforms}
									thisSynopsis={thisSynopsis}
									thisTitle={thisTitle}
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