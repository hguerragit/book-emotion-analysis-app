import React from 'react';
import Cover from '../Cover';
import Icon from '../Icon';

const cutText = (text=``, maxLength=0) => {
	const words = text.split(` `);
	const short = words.reduce((str, word) => str.length >= maxLength
		? str
		: `${str} ${word}`
	);

	return short.length === text.length ? short : `${short}...`;
};

const Card = ({	
	authors="",
	cover="",
	date="",
	link="",
	plataforms="",
	synopsis="",
	title="",
	className=""
}) => {
	const authorsNames = authors.split(`, `)
	const normalizedAuthors = authorsNames.reduce((str, author, i, {length}) => i === length - 1
		? `${str} e ${author}`
		: `${str}, ${author}`
	);
	const authorship = normalizedAuthors === `` ? `` : `por ${normalizedAuthors}`;

	const year = date.split(`-`)[0];
	const release = year === `` ? `` : `em ${year}`;
	const signature = `${authorship} ${release}`;

	const summary = cutText(synopsis, 750);

	return (
		<article className={`pl3 pr3 ${className}`}>
			<Cover alt={title} src={cover} className="fl mr3" />
			<h2 className="di f5 ma0">{title}</h2><br/>
			{signature}<br/>
			{
				link === "" || link === undefined || link === null
					? ("")
					: (<span title="saiba mais" onClick={() => window.open(link)}>
					       <Icon className="f6 purple pointer" family="fas" icon="book-reader" />
					   </span>)
			}
			<br/><br/>
			{summary}
		</article>
	);
};

export default Card;