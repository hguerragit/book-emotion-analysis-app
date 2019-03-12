import React from 'react';

const Feeling = ({ img, title, onClick, className }) => (
	<div onClick={onClick} style={{
		height: "128px",
		width: "128px",
	}}>
		<img 
			alt={title}
			src={img}
			title={title}
			className={`h-100 w-100 ${className}`}
		/>
	</div>
);

export default Feeling;