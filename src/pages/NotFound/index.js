import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import App from '../../components/custom/App';

import { PAGE_FEED } from '../../utils/constants';

const mapStateToProps = ({ access }) => ({ ...access });
const mapDispatchToProps = dispatch => ({ });

class NotFound extends React.Component {
	render() {
		return (
			<App>
				<div className="flex flex-column items-center justify-center h-100 w-100">
					<span className="gray-65" style={{
						fontSize: "9em"
					}}>
						¯\_(ツ)_/¯
					</span>
					<span className="f1 gray-55 mb3">
						Isso é uma página <span className="purple">404</span>. Pedimos perdão pelo vacilo
					</span>
					<span>
						Clique <Link to={PAGE_FEED} className="underline-to-background--purple">aqui</Link> para voltar à segurança
					</span>
				</div>
			</App>
		);
	}
}

const connectPropsWith = connect(mapStateToProps, mapDispatchToProps);
export default connectPropsWith(NotFound);