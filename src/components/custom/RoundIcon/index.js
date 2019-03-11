import React from 'react';
import Icon from '../Icon';

import './styles/alignment.css';
import './styles/animation.css';

const RoundIcon = ({ 
	classButton, 
	classIcon, 
	classWrapper, 
	enabled=true, 
	family, 
	icon, 
	onClick, 
	title 
}) => {
	return (
		<article className={`dib ${classWrapper}`}>
			<button 
				type="button" 
				className={`bw0 br-100 h3 outline-0 ph3 pointer pv2 relative w3 ${classButton}` }
				onClick={onClick} 
				title={title}
				disabled={!enabled}
			>
				<Icon 
					family={family} 
					icon={icon}  
					className={`absolute dynamic-center f3 left-50 top-50 ${classIcon}`}
				/>
			</button>
		</article>
	);
}

export default RoundIcon;