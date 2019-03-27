import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';

import { requestTweet } from '../../../utils/actions';

const mapStateToProps = ({ access, book, tweet }) => ({
	...access,
	...book,
	...tweet
});

const mapDispatchToProps = dispatch => ({
	handleTweet: (userId, bookId, plataform, tweet) => dispatch(requestTweet(userId, bookId, plataform, tweet))
});

class Tweetbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chars: 0,
			value: ""
		};

		this.handleStateChange = this.handleStateChange.bind(this);
	}

	handleStateChange(attr, val) {
		this.setState({
			[attr]: val
		})
	}

	render() {
		const { props, state, handleStateChange } = this;
		const { chars, value } = state;
		const { 
			id, 
			handleTweet,
			isOpen,
			plataforms,
			toCloseOnClick,
			userId
		} = props;

		return (
			<Modal 
				isOpen={isOpen}
				title="Tweete sobre o livro!"
				toCloseOnClick={() => toCloseOnClick()}
			>
				<textarea 
					maxlength={280} 
					placeholder="digite aqui..." 
					value={value}
					className="bn h4 w-100" style={{
						resize: "none"
					}}
					onChange={e => {
						handleStateChange("chars", e.target.value.length);
						handleStateChange("value", e.target.value);
					}}
				/>
				<button 
				className="bg-twitter bn br3 f6 link mb2 ph3 pv2 white"
				onClick={() => handleTweet(
					userId, 
					id, 
					plataforms, 
					value
				)}
				>
					tweet
				</button>
			</Modal>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Tweetbox);
