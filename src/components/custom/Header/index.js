import React from 'react';

import Brand from '../Brand';
import IconLink from '../IconLink';
import Dropdown from '../DropdownMenu/index';

import {
	PAGE_BROWSE,
	PAGE_FEED,
	PAGE_SHELF
} from '../../../utils/constants';

import './styles/index.css';

const Header = ({ className, style }) => (
	<article className={`absolute b--gray top-0 w-100 ${className}`} style={{
		...style,
		borderBottomStyle: "solid",
		borderBottomWidth: "1px"
	}}>
		<header className="flex items-center justify-between pl4 pr4">
			<span>
				<IconLink icon="home" text="home" to={PAGE_FEED} className="gray mr4" />
				<IconLink icon="book" text="sua biblioteca" to={PAGE_SHELF} className="gray mr4" />
				<IconLink icon="theater-masks" text="escolha um sentimento" to={PAGE_BROWSE} className="gray mr4" />
			</span>
			<span className="flex items-center">
				<Dropdown />
				<Brand />
			</span>
		</header>
	</article>
);

export default Header;