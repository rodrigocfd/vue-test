import React from 'react';

import useReduxStore from '../app/useReduxStore';
import useRefOpt from '../app/useRefOpt';
import c from './Writer.module.scss';

function Writer(_props, ref) {
	const phraseRef = useRefOpt(null, {focusOnMount: true, forwardRef: ref});
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
