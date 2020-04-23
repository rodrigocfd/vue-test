import React from 'react';

import useAppContext from 'app/hooks/useAppContext';
import useRefFocusOnMount from 'app/hooks/useRefFocusOnMount';
import c from './Writer.module.scss';

interface FocusWrapper {
	focus: () => void;
}
interface Props {
	focusWrapper?: FocusWrapper;
}

function Writer(props: Props) {
	const phraseRef = useRefFocusOnMount(null);
	const [context, setContext] = useAppContext();

	if (props.focusWrapper) {
		props.focusWrapper.focus = () => phraseRef.current.focus(); // assign a function to set focus
	}

	return (
		<div>
			<h1 className={c.title}>Writer</h1>
			<div>
				<input type="text" ref={phraseRef} value={context.phrase}
					onChange={e => setContext({phrase: e.target.value})} />
			</div>
		</div>
	);
}

export default Writer;
export type {FocusWrapper};
