import React from 'react';

const ListItem = ({ 
	label="", 
	className="", 
	style={} 
}) => (
	<li className={className} style={style}>{label}</li>
);

export default ListItem;