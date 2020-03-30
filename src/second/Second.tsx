import React from 'react';
import {Link} from 'react-router-dom';

import useAppContext from 'app/hooks/useAppContext';
import ModalOkCancel from 'app/modal/ModalOkCancel';
import Reader from './Reader';
import Writer, {FocusWrapper} from './Writer';
import c from './Second.module.scss';

function Second() {
	const writerFocus = {focus: () => {}} as FocusWrapper;
	const [context] = useAppContext();

	const [modalOpen, setModalOpen] = React.useState(false);
	const [modalText, setModalText] = React.useState('');

	function popClick() {
		setModalText(`The Context-stored text is "${context.phrase}".\nAnother phrase.`);
		setModalOpen(true);
	}

	function onModalOk() {
		setModalOpen(false);
		writerFocus.focus();
	}

	return (<>
		<Link to="/first">Go to first</Link>
		<Reader />
		<Writer focusWrapper={writerFocus} />
		<div className={c.btnModalOk}>
			<input type="button" value="Click for pop" onClick={popClick} />
		</div>

		{modalOpen &&
			<ModalOkCancel onOk={onModalOk} onCancel={() => setModalOpen(false)}>
				{modalText}
			</ModalOkCancel>
		}
	</>);
}

export default Second;
