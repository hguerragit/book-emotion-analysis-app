import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';

const mapStateToProps = ({ access }) => ({
    ...access
});

const mapDispatchToProps = dispatch => ({

});

class Shelf extends React.Component {
	render() {
		return (
			<App>

			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default Shelf;
