import React from 'react';

import Brand from '../Brand';
import IconLink from '../IconLink';
import RoundIcon from '../RoundIcon';
import Dropdown from '../DropdownMenu/index';

const Header = ({ className }) => (
	<article className={`absolute b--gray top-0 w-100 z-1 ${className}`} style={{
		borderBottomStyle: "solid",
		borderBottomWidth: "1px"
	}}>
		<header className="flex items-center justify-between pl4 pr4">
			<span>
				<IconLink icon="home" text="home" to="home" className="gray mr4" />
				<IconLink icon="book" text="your library" to="shelf" className="gray mr4" />
				<IconLink icon="theater-masks" text="pick a feeling" to="pick" className="gray mr4" />
				<IconLink icon="search" text="search" to="search" className="gray mr4" />
			</span>
			<span className="flex items-center">
				{/*<RoundIcon
                    classButton="anima-flip bg-transparent bn"
                    classIcon="black"
                    family="fas"
                    icon="bars"
					title="menu"
                />*/}
				<Dropdown />
				<Brand />
			</span>
		</header>
	</article>
);

export default Header;