import React from 'react';
import './styles/index.css'

const ListItem = ({ 
	label="", 
	onClick,
	className="", 
	style={} 
}) => (
	<li 
		onClick={onClick}
		className={className} 
		style={style}
	>
		{label}
	</li>
);

export default ListItem;