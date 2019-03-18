import React from 'react';
import './styles/index.css'

const ListItem = ({ 
	label="", 
	className="", 
	style={} 
}) => (
	<li className={className} style={style}>{label}</li>
);

export default ListItem;