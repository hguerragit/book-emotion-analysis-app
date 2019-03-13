import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const App = ({ children, className }) => (
	<Main>
		<Header style={{ height: "11vh" }} />
			<article className={`w-100 ${className}`} style={{
				height: "80vh",
				marginTop: "11vh"
			}}>
				{children}
			</article>
		<Footer style={{ height: "9vh" }} />
	</Main>
);

export default App;