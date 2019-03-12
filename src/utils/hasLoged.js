import Store from './stores';

const hasLoged = () => Store.getState().access.userId !== "";
export default hasLoged;