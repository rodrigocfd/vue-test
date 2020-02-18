import React from 'react';

import ReduxStore from '../app/ReduxStore';
import c from './Writer.module.scss';

function Writer(_props, ref) {
	const phraseRef = React.useRef(null);
	React.useImperativeHandle(ref, () => ({
		focus: () => phraseRef.current.focus(), // add focus() method to forwarded ref
		select: () => phraseRef.current.select()
	}), []);

	const phrase = ReduxStore.useValue(state => state.phrase);
	const update = ReduxStore.useUpdate();

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

export default React.forwardRef(Writer);
