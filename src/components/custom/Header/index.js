import React from 'react';

import Brand from '../Brand';
import IconLink from '../IconLink';
import RoundIcon from '../RoundIcon';

import {
	PAGE_BROWSE,
	PAGE_FEED,
	PAGE_SHELF
} from '../../../utils/constants';

import './styles/index.css';

const Header = ({ className }) => (
	<article className={`absolute b--gray top-0 w-100 z-1 ${className}`} style={{
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
				<RoundIcon
                    classButton="anima-flip bg-transparent bn"
                    classIcon="black"
                    family="fas"
                    icon="bars"
                    title="menu"
                />
				<Brand />
			</span>
		</header>
	</article>
);

export default Header;