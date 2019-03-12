import React from 'react';
import Main from '../Main';
import './styles/index.css';

const MainWithBG = ({ children, className }) => (
	<Main className="flex justify-between items-center">
		{children}
		<div 
	        title="Reader #19, Darren Thompson (2012)"
	        className="bg h-100" 
	        style={{width: "34.5%"}}
	    />
	</Main>
);

export default MainWithBG;