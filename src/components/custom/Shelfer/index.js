import React from 'react';
import { connect } from 'react-redux';
import RoundIcon from '../RoundIcon';

import { clickAddBookToBooklist } from '../../../utils/actions';

const mapStateToProps = ({ access, book }) => ({
	...access,
	...book,
});

const mapDispatchToProps = dispatch => ({
	handleBookListAddClick: (
		userId, 
		bookId, 
		plataform, 
		status
	) => dispatch(clickAddBookToBooklist(userId, bookId, plataform, status))
});

class Shelfer extends React.Component {
	render() {
		const {
			classButton,
			classIcon,
			family,
			icon,
			title,
			handleBookListAddClick,
			action,
			id,
			userId,
			plataforms
		} = this.props;

		return (
			<RoundIcon
                classButton={classButton}
                classIcon={classIcon}
                family={family}
                icon={icon}
                title={title}
                onClick={() => handleBookListAddClick(userId, id, plataforms, action)}   
            />
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Shelfer);