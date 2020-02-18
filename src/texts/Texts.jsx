import React from 'react';

import ReduxStore from '../app/ReduxStore';
import useModalOkCancel from '../app/modal/useModalOkCancel';
import Reader from './Reader';
import Writer from './Writer';
import c from './Texts.module.scss';

function Texts() {
	const wRef = React.useRef(null);
	const modalOkCancel = useModalOkCancel();
	const phrase = ReduxStore.useValue(state => state.phrase);

	function popClick() {
		modalOkCancel.open(`The Redux-stored text is "${phrase}".\nAnother phrase.`)
			.onOk(() => { wRef.current.focus(); wRef.current.select(); })
			.onCancel(() => console.log('Cancelled.'));
	}

	return (
		<div>
			<Reader />
			<Writer ref={wRef} />
			<div className={c.btnModalOk}>
				<modalOkCancel.Component />
				<input type="button" value="Click for pop" onClick={popClick} />
			</div>
		</div>
	);
}

export default Texts;
