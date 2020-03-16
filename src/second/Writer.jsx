import React from 'react';

import useAuthContext from '../app/useAuthContext';
import useRefOpt from '../app/useRefOpt';
import c from './Writer.module.scss';

function Writer(_props, ref) {
	const phraseRef = useRefOpt(null, {focusOnMount: true, forwardRef: ref});
	const [data, setData] = useAuthContext();

	return (
		<div>
			<h1 className={c.title}>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={data.phrase}
					onChange={e => setData({...data, phrase: e.target.value})} />
			</div>
		</div>
	);
}

export default React.forwardRef(Writer);
