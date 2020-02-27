import React from 'react';

import useReduxStore from '../app/useReduxStore';
import useModalOkCancel from '../app/modal/useModalOkCancel';
import Reader from './Reader';
import Writer from './Writer';
import c from './Second.module.scss';

function Second() {
	const modalOkCancel = useModalOkCancel();
	const wRef = React.useRef(null);
	const [phrase] = useReduxStore('phrase');

	function popClick() {
		modalOkCancel.show(`The Redux-stored text is "${phrase}".\nAnother phrase.`)
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

export default Second;
