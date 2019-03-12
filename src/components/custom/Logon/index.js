import React from 'react';
import { Redirect } from 'react-router-dom';

import hasLoged from '../../../utils/hasLoged';
import { PAGE_FEED } from '../../../utils/constants';

const Logon = ({ children }) => {
	return hasLoged()
		? (<Redirect to={PAGE_FEED} />)
		: (children);
};

export default Logon;