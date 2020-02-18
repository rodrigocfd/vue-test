import React from 'react';

import * as Store from '../app/reduxStore';
import useModalOkCancel from '../app/modal/useModalOkCancel';
import Reader from './Reader';
import Writer from './Writer';
import c from './Texts.module.scss';

function Texts() {
	const modalOkCancel = useModalOkCancel();
	const phrase = Store.useValue(state => state.phrase);

	function popClick() {
		modalOkCancel.open(`The Redux-stored text is "${phrase}".`)
			.onOk(() => console.log('OK button clicked.'))
			.onCancel(() => console.log('Cancelled.'));
	}

	return (
		<div>
			<Reader />
			<Writer />
			<div className={c.btnModalOk}>
				<modalOkCancel.Component />
				<input type="button" value="Click for pop" onClick={popClick} />
			</div>
		</div>
	);
}

export default Texts;
