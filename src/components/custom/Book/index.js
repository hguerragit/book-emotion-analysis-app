import React from 'react';
import { connect } from 'react-redux';

import Cover from '../Cover';
import { clickBook } from '../../../utils/actions';

const mapStateToProps = ({ book }) => ({
	...book
});

const mapDispatchToProps = dispatch => ({
	handleBookClick: book => dispatch(clickBook(book))
});

class Book extends React.Component {
	render() {
		const {
			thisAuthors,
			thisCover,
			thisDate,
			thisLink,
			thisPlataforms,
			thisSynopsis,
			thisTitle,
			handleBookClick
		} = this.props;
		const author = thisAuthors.split(",")[0];
		const year = thisDate.split("-")[0];

		return (
			<div 
				title={`${thisTitle}, by ${author} (${year})`} 
				className="bg-transparent dib ma2"
				onClick={() => handleBookClick({
					authors: thisAuthors,
					cover: thisCover,
					date: thisDate,
					link: thisLink,
					plataforms: thisPlataforms,
					synopsis: thisSynopsis,
					title: thisTitle
				})}
			>
				<Cover alt="thisTitle" src={thisCover} />
			</div>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Book);