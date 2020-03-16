import React from 'react';
import {Link} from 'react-router-dom';

import useAuthContext from '../app/useAuthContext';
import useModalOkCancel from '../app/modal/useModalOkCancel';
import Reader from './Reader';
import Writer from './Writer';
import c from './Second.module.scss';

function Second() {
	const modalOkCancel = useModalOkCancel();
	const wRef = React.useRef(null);
	const [data] = useAuthContext();

	function popClick() {
		modalOkCancel.show(`The Context-stored text is "${data.phrase}".\nAnother phrase.`)
			.onOk(() => { wRef.current.focus(); wRef.current.select(); })
			.onCancel(() => console.log('Cancelled.'));
	}

	return (
		<>
			<Link to="/first">Go to first</Link>
			<Reader />
			<Writer ref={wRef} />
			<div className={c.btnModalOk}>
				<modalOkCancel.Component />
				<input type="button" value="Click for pop" onClick={popClick} />
			</div>
		</>
	);
}

export default Second;
