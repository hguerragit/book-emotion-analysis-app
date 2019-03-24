import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import Card from '../../components/custom/Card';
import List from '../../components/custom/List';

import {
	clickBook,
	clickList, 
	requestBookList 
} from '../../utils/actions';

import {
	LIST_READ,
	LIST_READING,
	LIST_WISH
} from '../../utils/constants';

const createItem = (label, onClick) => ({
	label,
	onClick
});

const mapStateToProps = ({ access, book, bookList }) => ({
    ...access,
    ...book,
    ...bookList
});

const mapDispatchToProps = dispatch => ({
	handleBookListRequest: userId => dispatch(requestBookList(userId)),
	handleBookSorting: status => dispatch(clickList(status)),
	handleClickBook: book => dispatch(clickBook(book))
});

class Shelf extends React.Component {
	componentWillMount() {
		const { handleBookListRequest, userId } = this.props;
		handleBookListRequest(userId);
	}

	render() {
		const { 
			handleBookSorting, 
			handleClickBook, 
			authors,
			bookList,
			cover,
			date,
			link,
			plataforms, 
			synopsis,
			title 
		} = this.props;

		const books = bookList.map(book => createItem(book.title, () => handleClickBook(book)));
		const items = [
			createItem("lendo", () => handleBookSorting(LIST_READING)),
			createItem("já li", () => handleBookSorting(LIST_READ)),
			createItem("vou ler", () => handleBookSorting(LIST_WISH))
		];

		return (
			<App>
				<article className="flex h-100 w-100">
					<List 
						items={items}
						title="listas"
						className="h-100 w-20 br bw1"
					/>
					<List 
						items={books}
						title="livros"
						className="f5 h-100 w-40 br bw1"
					/>
					<section className="flex flex-column justify-between pb3 pt3 w-60">
						<Card
							authors={authors}
							cover={cover}
							date={date}
							link={link}
							plataforms={plataforms}
							synopsis={synopsis}
							title={title}
						/>
						<section>
							
						</section>
					</section>
				</article>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Shelf);
