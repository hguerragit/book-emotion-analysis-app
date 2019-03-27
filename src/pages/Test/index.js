import React from 'react';
import App from '../../components/custom/App';
import Modal from '../../components/custom/Modal';
import RoundIcon from '../../components/custom/RoundIcon';

const RenderModal = () => (
	<Modal isOpen={true} />
);

class Test extends React.Component {
	render() {
		return (
				<App>
					<RoundIcon
	            	classButton="bg-transparent bn"
	            	classIcon="moon-gray red--hover"
	            	family="fas"
	            	icon="times"
	            	title="fechar"
	            	onClick={() => RenderModal()}
	            />			
            </App>
		);
	}
}

export default Test;
