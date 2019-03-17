import React from 'react';

import Brand from '../Brand';
import IconLink from '../IconLink';
import RoundIcon from '../RoundIcon';
import Dropdown from '../DropdownMenu/index';

import {
	PAGE_BROWSE,
	PAGE_FEED,
	PAGE_SHELF
} from '../../../utils/constants';

import './styles/index.css';

const highlight = url => ({
	[PAGE_FEED]: url === PAGE_FEED
		? "highlight"
		: console.log(),

	[PAGE_SHELF]: url === PAGE_SHELF
		? "highlight"
		: "Erro",

	[PAGE_BROWSE]: url === PAGE_BROWSE
		? "highlight"
		: "Erro"
})

const address = window.location.href;
const page = address.split("/")[3];
const classes = highlight(page);

const Header = ({ className, style }) => {
	return (
		<article className={`absolute b--gray top-0 w-100 ${className}`} style={{
			...style,
			borderBottomStyle: "solid",
			borderBottomWidth: "1px"
		}}>
			<header className="flex items-center justify-between pl4 pr4">
				<span>
					<IconLink icon="home" text="home" to={PAGE_FEED} className={`gray mr4 ${classes[PAGE_FEED]}`} />
					<IconLink icon="book" text="sua biblioteca" to={PAGE_SHELF} className={`gray mr4 ${classes[PAGE_SHELF]}`} />
					<IconLink icon="theater-masks" text="escolha um sentimento" to={PAGE_BROWSE} className={`gray mr4 ${classes[PAGE_BROWSE]}`} />
				</span>
				<span className="flex items-center">
					<Dropdown />
					<Brand />
				</span>
			</header>
		</article>
	);
}

export default Header;