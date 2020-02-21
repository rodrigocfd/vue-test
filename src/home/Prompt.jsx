import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../app/modal/Modal';
import Hooks from '../app/Hooks';
import c from './Prompt.module.scss';

function Prompt(props) {
	const txtRef = Hooks.useRef(null, {focusOnMount: true});
	const [text, setText] = React.useState(props.initText || ''); // because initText is optional

	function onOk() {
		props.modalState.close();
		props.onOk && props.onOk(text);
	}

	function onCancel() {
		props.modalState.close();
		props.onCancel && props.onCancel();
	}

	return (
		<Modal onEsc={onCancel}>
			<div className={c.txt}>
				<input type="text" ref={txtRef}
					value={text} onChange={e => setText(e.target.value)} />
			</div>
			<div className={c.btns}>
				<input type="button" value="Ok" onClick={onOk} />
				<input type="button" value="Cancel" onClick={onCancel} />
			</div>
		</Modal>
	);
}

Prompt.propTypes = {
	modalState: Modal.stateProps.isRequired,
	initText: PropTypes.string,
	onOk: PropTypes.func,
	onCancel: PropTypes.func
};

export default Prompt;
