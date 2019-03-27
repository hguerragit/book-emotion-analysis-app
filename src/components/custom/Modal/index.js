import React from 'react';
import ReactModal from 'react-modal';

import RoundIcon from '../RoundIcon';

import './styles/index.css';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}

		this.updateIsOpen = this.updateIsOpen.bind(this);
	}

	updateIsOpen(b) {
		this.setState({ isOpen: b });
	}

	render() {
		const { props, state, updateIsOpen } = this;
		const { isOpen } = state;
		const { children, className } = props;

		return (
			<ReactModal 
				isOpen={isOpen}
				className={`bg-white-80 br2 inner-outline pa2 shadow-1 z-2 w-50 h-50 ${className}`}
				overlayClassName="bg-white--transp flex items-center justify-center vh-100 w-100 z-1"
			>
				<div className="tr w-100">
					<RoundIcon
		            	classButton="bg-transparent bn"
		            	classIcon="moon-gray red--hover"
		            	family="fas"
		            	icon="times"
		            	title="fechar"
		            	onClick={() => updateIsOpen(false)}
		            />
	            </div>
	            <div>
	            	{children}
	            </div>
			</ReactModal>
		);
	}

	componentDidMount() {
		const { props, updateIsOpen } = this;
		const { isOpen } = props;

		updateIsOpen(isOpen);
	}
}

export default Modal;
