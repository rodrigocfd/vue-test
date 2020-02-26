import React from 'react';

import Hooks from '../app/Hooks';
import useReduxStore from '../app/useReduxStore';
import c from './Writer.module.scss';

function Writer(_props, ref) {
	const phraseRef = Hooks.useRef(null, {focusOnMount: true, forwardRef: ref});
	const [phrase, setPhrase] = useReduxStore('phrase');

	return (
		<div>
			<h1 className={c.title}>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={phrase}
					onChange={e => setPhrase(e.target.value)} />
			</div>
		</div>
	);
}

export default React.forwardRef(Writer);
