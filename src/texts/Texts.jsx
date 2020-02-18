import React from 'react';

import * as Store from '../app/reduxStore';
import useModalOk from '../app/modal/useModalOk';
import Reader from './Reader';
import Writer from './Writer';
import c from './Texts.module.scss';

function Texts() {
	const modalOk = useModalOk();
	const phrase = Store.useValue(state => state.phrase);

	function popClick() {
		modalOk.open(`The Redux-stored text is "${phrase}".`)
			.onOk(() => {
				console.log('OK modal was closed.');
			});
	}

	return (
		<div>
			<Reader />
			<Writer />
			<div className={c.btnModalOk}>
				<modalOk.Component />
				<input type="button" value="Click for pop" onClick={popClick} />
			</div>
		</div>
	);
}

export default Texts;
