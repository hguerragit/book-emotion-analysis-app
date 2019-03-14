import React from 'react';
import { connect } from 'react-redux';

import App from '../../components/custom/App';
import List from '../../components/custom/List';

const createItem = (label, onClickParam=label) => ({
	label,
	onClick: () => console.log(onClickParam)
});

const mapStateToProps = ({ access }) => ({
    ...access
});

const mapDispatchToProps = dispatch => ({

});

class Shelf extends React.Component {
	render() {
		const labels = ["vou ler", "lendo", "já li"];
		const items = labels.map(label => createItem(label));

		return (
			<App>
				<article className="flex h-100 flex-column w-100">
					<List 
						items={items}
						title="listas"
						className="h-100 w-20 br bw1"
					/>
				</article>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(Shelf);
