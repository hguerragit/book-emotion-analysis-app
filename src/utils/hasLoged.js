import Store from './stores';

const hasLoged = (userId=Store.getState().access.userId) => userId !== "" 
	&& userId !== null 
	&& userId !== undefined;
	
export default hasLoged;