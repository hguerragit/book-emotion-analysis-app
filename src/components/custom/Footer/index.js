import React from 'react';
import { Link } from 'react-router-dom';

import {
	PAGE_HOW,
	PAGE_US,
	PAGE_WHY
} from '../../../utils/constants';

import '../../remake/a/a.css';

const Footer = ({ className }) => (
	<article className={`absolute b--gray bottom-0 w-100 z-1 ${className}`} style={{
		borderTopStyle: "solid",
		borderTopWidth: "1px"
	}}>
		<footer className="flex items-center justify-start pa3">
			<Link to={PAGE_US} className="fw1 gray-40 mr3">nós</Link>
			<Link to={PAGE_HOW} className="fw1 gray-40 mr3">como</Link>
			<Link to={PAGE_WHY} className="fw1 gray-40 mr3">por que</Link>
		</footer>
	</article>
);

export default Footer;