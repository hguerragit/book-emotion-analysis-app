import React from 'react';
import ReactModal from 'react-modal';

import RoundIcon from '../RoundIcon';

import './styles/index.css';

const Modal = ({ 
	children, 
	className, 
	isOpen,
	title,
	toCloseOnClick
}) => (
	<ReactModal 
		isOpen={isOpen}
		className={`bg-white-90 br2 inner-outline pa1 shadow-1 w-50 ${className}`}
		overlayClassName="bg-white--transp fixed flex items-center justify-center vh-100 w-100"
	>
		<div className="flex items-center justify-between pl3 w-100">
			<h2 className="f4">{title}</h2>
			<RoundIcon
            	classButton="bg-transparent bn"
            	classIcon="moon-gray red--hover"
            	family="fas"
            	icon="times"
            	title="fechar"
            	onClick={() => toCloseOnClick()}
            />
        </div>
        <div className="pa1 pl3 pr3">
        	{children}
        </div>
	</ReactModal>
);

export default Modal;
