import React from 'react';
import ListItem from '../ListItem';

const List = ({ 
	items=[], 
	title="", 
	className="",
	style={}
}) => (
	<article className={className} style={style}>
		<h2 className="tc">{title}</h2>
		<ul className="list pa0 w-100">
		{
			items.map(({label, onClick}, i) => (<ListItem  
				label={label}
				onClick={onClick}
				className="b--gray-85 bb bg-purple--hover f4 pa1 pl3 pointer w-100"
				style={{
					borderBottomStyle: "solid",
					borderBottomWidth: "1px",
					borderTopStyle: "solid",
					borderTopWidth: i === 0 ? "1px" : "0px"
				}}
			/>))
		}
		</ul>
	</article>
);

export default List;