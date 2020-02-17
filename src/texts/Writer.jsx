import React from 'react';

import * as Store from '../app/reduxStore';
import c from './Writer.module.scss';

function Writer() {
	const phraseRef = React.useRef(null);

	const phrase = Store.useValue(state => state.phrase);
	const update = Store.useUpdate();

	React.useEffect(() => {
		phraseRef.current.focus();
	}, []);

	return (
		<div>
			<h1 className={c.title}>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={phrase}
					onChange={e => update('phrase', e.target.value)} />
			</div>
		</div>
	);
}

export default Writer;
